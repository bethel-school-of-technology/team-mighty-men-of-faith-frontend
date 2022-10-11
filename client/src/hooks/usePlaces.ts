import { useEffect, useRef, useState } from "react";
import Geocode from "react-geocode";
import { geocodeByPlaceId } from "react-places-autocomplete";
import { useDispatch } from "react-redux";
import { setLocation, setSnackBar } from "../store/actions";

const key = "";

Geocode.setApiKey(key);

Geocode.setLanguage("en");
// Geocode.setRegion("");

const options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0,
};
declare const window: any;

function errors(err: any) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
const formattedSuggestion = (structured_formatting: any) => ({
  mainText: structured_formatting.main_text,
  secondaryText: structured_formatting.secondary_text,
});

export default function usePlaces() {
  const dispatch = useDispatch();
  const [ready, setReady] = useState(false);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const typingTimer = useRef<any>(null);
  const autocompleteService = useRef<any>(null);
  const autocompleteOK = useRef<any>(null);

  useEffect(() => {
    if (!window.google || !window.google.maps.places) {
      console.error(
        "[react-places-autocomplete]: Google Maps JavaScript API library must be loaded. See: https://github.com/kenny-hibino/react-places-autocomplete#load-google-library"
      );
      return;
    }

    autocompleteService.current =
      new window.google.maps.places.AutocompleteService();
    autocompleteOK.current = window.google.maps.places.PlacesServiceStatus.OK;
    setReady(true);
  }, []);

  useEffect(() => {
    clearTimeout(typingTimer.current);
    if (value) {
      // if (!loading) {
      //   setLoading(true);
      // }
      typingTimer.current = setTimeout(() => fetchPredictions(value), 500);
    } else {
      // if (loading) {
      //   setLoading(false);
      // }
      setSuggestions([]);
    }
    // eslint-disable-next-line
  }, [value]);

  const autocompleteCallback = (predictions: any, status: any) => {
    // setLoading(false);
    if (status !== autocompleteOK.current) {
      console.error(
        "[react-places-autocomplete]: error happened when fetching data from Google Maps API.\nPlease check the docs here (https://developers.google.com/maps/documentation/javascript/places#place_details_responses)\nStatus: ",
        status
      );
      return setSuggestions([]);
    }

    setSuggestions(
      predictions.map((p: any, idx: number) => ({
        _id: p.id,
        description: p.description,
        placeId: p.place_id,
        index: idx,
        formattedSuggestion: formattedSuggestion(p.structured_formatting),
        matchedSubstrings: p.matched_substrings,
        terms: p.terms,
        types: p.types,
      }))
    );
  };

  const fetchPredictions = (value: any) => {
    if (value.length) {
      autocompleteService.current.getPlacePredictions(
        {
          // types: ["(regions)"],
          componentRestrictions: {
            country: "PK",
          },

          input: value,
        },
        autocompleteCallback
      );
    }
  };

  const success = (pos: any) => {
    const { latitude, longitude } = pos.coords;

    Geocode.fromLatLng(latitude, longitude).then(
      (response) => {
        const address = response.results[0].formatted_address;
        dispatch(
          setLocation({
            lat: latitude,
            lng: longitude,
            address,
          })
        );
      },
      (error) => {
        console.error(error);
        dispatch(
          setLocation({
            lat: latitude,
            lng: longitude,
            address: "",
          })
        );
      }
    );
  };
  const getCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "denied") {
          dispatch(setSnackBar("Permission denied!"));
        }
        result.onchange = () => {
          console.log(result.state);
        };
      });
    } else {
      alert("Sorry Not available!");
    }
  };

  const handleSelect = (suggestion: any) => {
    setValue("");
    setSuggestions([]);

    geocodeByPlaceId(suggestion.placeId)
      .then((results) => {
        const { lat, lng } = results[0].geometry.location;
        dispatch(
          setLocation({
            lat: lat(),
            lng: lng(),
            address: suggestion.description,
          })
        );
      })
      .catch((error) => console.error(error));
  };

  return { handleSelect, getCurrentLocation, suggestions, ready, setSuggestions, value, setValue };
}
