export interface loadingIndicatorStateType {
  loading: boolean;
  helperText: string;
}

export interface stateTypes {
  loadingIndicator: loadingIndicatorStateType;
  snackBar: string;

}
// ----------------------><--------------------

export interface stringActionType {
  type: string;
  payload: string;
}