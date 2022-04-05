    export const goToHome = (navigate) => {
        navigate('/')
    }
    
    export const goToTripsList = (navigate) => {
        navigate('/trips/list')
    }

    export const goToLogin = (navigate) => {
        navigate('/login')
    }

    export const goToAbout = (navigate) => {
        navigate('/about')
    }

    export const goToApplicationForm = (navigate) => {
        navigate('/trips/application')
    }

    export const goToAdminPage = (navigate) => {
        navigate('/admin/trips/list')
    }

    export const goToAdminTripDetails = (navigate) => {
        navigate('/admin/trips/:id')
    }

    export const goToAdminCreateTrip = (navigate) => {
        navigate('/admin/trips/create')
    }

    export const goToBack = (navigate) => {
        navigate(-1)
    }
