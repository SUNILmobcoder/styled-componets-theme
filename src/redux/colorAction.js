export const SWITCH_COLOR = 'SWICH_COLOR';

export const colorSwitch = (theme) => {
  return (dispatch) => {
    dispatch({
      type: SWITCH_COLOR,
      theme: theme,
    });
  };
};
