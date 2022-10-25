"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_geocode_1 = __importDefault(require("react-geocode"));
const react_places_autocomplete_1 = require("react-places-autocomplete");
const react_redux_1 = require("react-redux");
const actions_1 = require("../store/actions");
const key = "";
react_geocode_1.default.setApiKey(key);
react_geocode_1.default.setLanguage("en");
// Geocode.setRegion("");
const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
};
function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
const formattedSuggestion = (structured_formatting) => ({
    mainText: structured_formatting.main_text,
    secondaryText: structured_formatting.secondary_text,
});
function usePlaces() {
    const dispatch = (0, react_redux_1.useDispatch)();
    const [ready, setReady] = (0, react_1.useState)(false);
    const [value, setValue] = (0, react_1.useState)("");
    const [suggestions, setSuggestions] = (0, react_1.useState)([]);
    const typingTimer = (0, react_1.useRef)(null);
    const autocompleteService = (0, react_1.useRef)(null);
    const autocompleteOK = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!window.google || !window.google.maps.places) {
            console.error("[react-places-autocomplete]: Google Maps JavaScript API library must be loaded. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library");
            return;
        }
        autocompleteService.current =
            new window.google.maps.places.AutocompleteService();
        autocompleteOK.current = window.google.maps.places.PlacesServiceStatus.OK;
        setReady(true);
    }, []);
    (0, react_1.useEffect)(() => {
        clearTimeout(typingTimer.current);
        if (value) {
            // if (!loading) {
            //   setLoading(true);
            // }
            typingTimer.current = setTimeout(() => fetchPredictions(value), 500);
        }
        else {
            // if (loading) {
            //   setLoading(false);
            // }
            setSuggestions([]);
        }
        // eslint-disable-next-line
    }, [value]);
    const autocompleteCallback = (predictions, status) => {
        // setLoading(false);
        if (status !== autocompleteOK.current) {
            console.error("[react-places-autocomplete]: error happened when fetching data from Google Maps API.\nPlease check the docs here (https://developers.google.com/maps/documentation/javascript/places#place_details_responses)\nStatus: ", status);
            return setSuggestions([]);
        }
        setSuggestions(predictions.map((p, idx) => ({
            _id: p.id,
            description: p.description,
            placeId: p.place_id,
            index: idx,
            formattedSuggestion: formattedSuggestion(p.structured_formatting),
            matchedSubstrings: p.matched_substrings,
            terms: p.terms,
            types: p.types,
        })));
    };
    const fetchPredictions = (value) => {
        if (value.length) {
            autocompleteService.current.getPlacePredictions({
                // types: ["(regions)"],
                componentRestrictions: {
                    country: "US",
                },
                input: value,
            }, autocompleteCallback);
        }
    };
    const success = (pos) => {
        const { latitude, longitude } = pos.coords;
        react_geocode_1.default.fromLatLng(latitude, longitude).then((response) => {
            const address = response.results[0].formatted_address;
            dispatch((0, actions_1.setLocation)({
                lat: latitude,
                lng: longitude,
                address,
            }));
        }, (error) => {
            console.error(error);
            dispatch((0, actions_1.setLocation)({
                lat: latitude,
                lng: longitude,
                address: "",
            }));
        });
    };
    const getCurrentLocation = async () => {
        if (navigator.geolocation) {
            navigator.permissions.query({ name: "geolocation" }).then((result) => {
                if (result.state === "granted" || result.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(success, errors, options);
                }
                else if (result.state === "denied") {
                    dispatch((0, actions_1.setSnackBar)("Permission denied!"));
                }
                result.onchange = () => {
                    console.log(result.state);
                };
            });
        }
        else {
            alert("Sorry Not available!");
        }
    };
    const handleSelect = (suggestion) => {
        setValue("");
        setSuggestions([]);
        (0, react_places_autocomplete_1.geocodeByPlaceId)(suggestion.placeId)
            .then((results) => {
            const { lat, lng } = results[0].geometry.location;
            dispatch((0, actions_1.setLocation)({
                lat: lat(),
                lng: lng(),
                address: suggestion.description,
            }));
        })
            .catch((error) => console.error(error));
    };
    return { handleSelect, getCurrentLocation, suggestions, ready, setSuggestions, value, setValue };
}
exports.default = usePlaces;
