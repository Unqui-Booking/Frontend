const boookings = {
    bookingsCurrent: [
        {
            "id": 5,
            "seat": {
                "id": 11,
                "desk": {
                    "id": 2,
                    "nameDesk": "Escritorio 2",
                    "area": "general",
                    "availableDesk": true,
                    "deleted": false
                },
                "deleted": false
            },
            "date": "2021-07-10",
            "startTime": 11,
            "endTime": 12,
            "deleted": false,
            "state": "expired",
            "user": {
                "id": 1,
                "name": "Erica Gerez",
                "mail": "erica.gerez@alu.edu.unq.com.ar",
                "password": "Contrasenia1",
                "admin": false,
                "deleted": false
            }
        },
        {
            "id": 1,
            "seat": {
                "id": 11,
                "desk": {
                    "id": 2,
                    "nameDesk": "Escritorio 2",
                    "area": "general",
                    "availableDesk": true,
                    "deleted": false
                },
                "deleted": false
            },
            "date": "2021-07-10",
            "startTime": 11,
            "endTime": 12,
            "deleted": false,
            "state": "uploaded",
            "user": {
                "id": 1,
                "name": "Erica Gerez",
                "mail": "erica.gerez@alu.edu.unq.com.ar",
                "password": "Contrasenia1",
                "admin": false,
                "deleted": false
            }
        }
    ], 
    bookingsHistorical: [
        {
            "id": 16,
            "seat": {
                "id": 1,
                "desk": {
                    "id": 1,
                    "nameDesk": "Escritorio 1",
                    "area": "silent",
                    "availableDesk": false,
                    "deleted": false
                },
                "deleted": false
            },
            "date": "2021-07-08",
            "startTime": 15,
            "endTime": 16,
            "deleted": false,
            "state": "cancelled",
            "user": {
                "id": 1,
                "name": "Erica Gerez",
                "mail": "erica.gerez@alu.edu.unq.com.ar",
                "password": "Contrasenia1",
                "admin": false,
                "deleted": false
            }
        },
        {
            "id": 14,
            "seat": {
                "id": 17,
                "desk": {
                    "id": 3,
                    "nameDesk": "Escritorio 3",
                    "area": "silent",
                    "availableDesk": true,
                    "deleted": false
                },
                "deleted": false
            },
            "date": "2021-07-08",
            "startTime": 15,
            "endTime": 16,
            "deleted": false,
            "state": "confirmed",
            "user": {
                "id": 1,
                "name": "Erica Gerez",
                "mail": "erica.gerez@alu.edu.unq.com.ar",
                "password": "Contrasenia1",
                "admin": false,
                "deleted": false
            }
        },
        {
            "id": 13,
            "seat": {
                "id": 17,
                "desk": {
                    "id": 3,
                    "nameDesk": "Escritorio 3",
                    "area": "silent",
                    "availableDesk": true,
                    "deleted": false
                },
                "deleted": false
            },
            "date": "2021-07-08",
            "startTime": 15,
            "endTime": 16,
            "deleted": false,
            "state": "confirmed",
            "user": {
                "id": 1,
                "name": "Erica Gerez",
                "mail": "erica.gerez@alu.edu.unq.com.ar",
                "password": "Contrasenia1",
                "admin": false,
                "deleted": false
            }
        }
    ]

}

export default boookings;