
class App {
    static BASE_URL_PATIENT = "http://localhost:8080/api/patients";
    static BASE_URL_WARD = "http://localhost:8080/api/wards";

    static showDeleteConfirmDialog() {
        return Swal.fire({
            icon: 'warning',
            text: 'Are you sure you want to delete the selected data ?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it !',
            cancelButtonText: 'Cancel',
        })
    }

    static showSuccessAlert(t) {
        Swal.fire({
            icon: 'success',
            title: t,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
        })
    }

    static showErrorAlert(t) {
        Swal.fire({
            icon: 'error',
            title: 'Warning',
            text: t,
        })
    }
}

class Patient {
    constructor(id, name, phone, gender, dob, ward) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.gender = gender;
        this.dob = dob;
        this.ward = ward;
    }
}
