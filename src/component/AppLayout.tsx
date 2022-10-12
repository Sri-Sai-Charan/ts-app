import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { AppInterface } from "../types";
import { useDispatch } from "react-redux";
import { StoreDispatch } from '../redux/store';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from "@material-ui/core/TextField";

const AppLayout: React.FC<AppInterface> = ({
    labelText,
    addHandler,
    removeHandler,
    selectorState,
  }) => {
    const [textDescription, setTextDescription] = useState('');
    const dispatch = useDispatch<StoreDispatch>();

    const handleOnChange = ({
        target: { value },
      }: React.ChangeEvent<HTMLInputElement>) => {
        setTextDescription(value);
      };
    return (
        <div>
            <TextField
                fullWidth
                label={labelText}
                onChange={handleOnChange}
                value={textDescription}
                variant='outlined'
                size='small'
            />
            <Button variant="contained" color="primary" onClick={() => dispatch(addHandler(textDescription))}>
                Add
            </Button>
        </div>

    );
  };

export default AppLayout;