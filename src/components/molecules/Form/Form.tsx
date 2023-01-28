import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import { UserSchema } from "validation";
import { IForm } from "./Form.interface";
import { addEmployee, updateExistingEmployee } from "./logic";
import { useDispatch, useSelector } from "react-redux";
import { selectEmployee } from "app/store";

const Form = ({ edit, employee }: IForm) => {
  const dispatch = useDispatch();
  const content = useSelector(selectEmployee());
  const {
    statusUpdating,
    updateEmployeeMessage,
    statusAdding,
    addEmployeeMessage,
  } = content;
  let editForm: boolean = false;

  if (edit === true && employee != null && employee != undefined) {
    editForm = true;
  }
  const formik = useFormik({
    initialValues: {
      _id: editForm ? employee?._id : "",
      firstName: editForm ? employee?.firstName : "",
      lastName: editForm ? employee?.lastName : "",
      email: editForm ? employee?.email : "",
      phone: editForm ? employee?.phone : "",
      gender: editForm ? employee?.gender : "M",
    },
    validationSchema: UserSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (edit) {
        updateExistingEmployee(values, dispatch);
      } else {
        delete values["_id"];
        const emp = {
          ...values,
          photo:
            "https://images.news18.com/ibnlive/uploads/2022/12/ranveer-singh.jpg",
        };
        addEmployee(emp, dispatch);
      }
    },
  });
  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 1 }}
      onSubmit={formik.handleSubmit}
    >
      {editForm ? (
        <TextField
          margin="normal"
          required
          fullWidth
          id="empId"
          label="Employee ID"
          name="empId"
          autoComplete="id"
          value={formik.values._id}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          disabled
        />
      ) : (
        <></>
      )}
      <TextField
        margin="normal"
        required
        fullWidth
        id="firstName"
        label="First Name"
        name="firstName"
        autoComplete="firstNname"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="lastName"
        label="Last Name"
        name="lastName"
        autoComplete="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="phone"
        label="Phone"
        id="password"
        autoComplete="current-password"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <InputLabel id="demo-simple-select-label">Age</InputLabel>

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="gender"
        value={formik.values.gender}
        label="Age"
        fullWidth
        onChange={formik.handleChange}
      >
        <MenuItem value={"M"}>Male</MenuItem>
        <MenuItem value={"F"}>Female</MenuItem>
      </Select>

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {edit ? "Update Employee" : "Add Employee"}
      </Button>
      {statusUpdating === "success" ? (
        <Alert severity="success">{updateEmployeeMessage}</Alert>
      ) : statusUpdating === "failed" ? (
        <Alert severity="error">{updateEmployeeMessage}</Alert>
      ) : statusAdding === "success" ? (
        <Alert severity="success">{addEmployeeMessage}</Alert>
      ) : statusAdding === "failed" ? (
        <Alert severity="error">{addEmployeeMessage}</Alert>
      ) : (
        <></>
      )}
    </Box>
  );
};

export { Form };

{
  /* <Alert severity="success">{updateEmployeeMessage}</Alert>; */
}
