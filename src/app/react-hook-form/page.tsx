"use client"
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, TextField, Container, Grid, Typography } from '@mui/material';
type FormData = {
    firstName: string;
    lastName: string;
    email: string;
  };
function App() {
  const { handleSubmit, watch, control, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data:any) => {
    console.log(data);  
  };
  console.log("F-name",watch("firstName"))
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Material-UI Form with React Hook Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{ required: 'First name is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={{ required: 'Last name is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ''}
                />
              )}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default App;

// "use client"
// import { useForm, SubmitHandler } from "react-hook-form"

// interface IFormInput {
//   firstName: string
//   lastName: string
//   age: number
// }

// export default function App() {
//   const { register, handleSubmit } = useForm<IFormInput>()
//   const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: 'First Name is required', maxLength: 20 })} placeholder="Name"/>
//       <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
//       <input type="number" {...register("age", { min: 18, max: 99 })} />
//       <input type="submit" />
//     </form>
//   )
// }