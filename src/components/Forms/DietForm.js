import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const DietForm = () => {
  const classes = useStyles();
  const [entree, setEntree] = React.useState("");

  const handleChange = (event) => {
    setEntree(event.target.value);
  };

  return (
    <div data-testid="diet-form">
      <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
        Diet Form
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Entree</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={entree}
          onChange={handleChange}
        >
          <MenuItem value={"chicken"}>Chicken</MenuItem>
          <MenuItem value={"beef"}>Beef</MenuItem>
          <MenuItem value={"fish"}>Fish</MenuItem>
          <MenuItem value={"veg"}>Veg</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DietForm;
