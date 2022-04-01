import React from "react";
import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/HomePage'
import { About } from '../pages/About'
import { ListTrips } from '../pages/ListTripsPage'
import { ApplicationForm } from '../pages/ApplicationFormPage'
import { Login } from '../pages/Admin/LoginPage'
import { TripDetails } from '../pages/Admin/TripDetailsPage'
import { CreateTrip } from '../pages/Admin/CreateTripPage'

export const Router = () => (
    <Routes>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='trips/list' element={<ListTrips />} />
      <Route path='trips/application' element={<ApplicationForm />} />
      <Route path='login' element={<Login />} />
      <Route path='admin/trips/list' element={<TripDetails />} />
      <Route path='admin/trips/create' element={<CreateTrip />} />
    </Routes>
)