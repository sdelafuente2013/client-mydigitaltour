export const validate = (input) => {
    let error = {}
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
    if (!input.email) {
      error.email = "El correo electrónico es obligatorio"
    } else if (!emailRegex.test(input.email)) {
      error.email = "El correo electrónico no es válido"
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!input.password.trim()) {
      error.password = "La contraseña es obligatoria";
    } else if (input.password.length < 8) {
      error.password = "La contraseña debe tener al menos 8 caracteres";
    } else if (!/[A-Z]/.test(input.password)) {
      error.password = "La contraseña debe contener al menos una letra mayúscula";
    } else if (!/[a-z]/.test(input.password)) {
      error.password = "La contraseña debe contener al menos una letra minúscula";
    } else if (!/\d/.test(input.password)) {
      error.password = "La contraseña debe contener al menos un número";
    }
    if (!input.name.trim()) {
        error.name = "El nombre es obligatorio";
      } else if (!/^[a-zA-Z\s]{3,15}$/.test(input.name)) {
        error.name = "El nombre debe tener solo letras y tener entre 3 y 15 caracteres";
      }
    return error
  }