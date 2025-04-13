document.addEventListener('DOMContentLoaded', () => {

    function mostrarError(input, mensaje) {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains('error-mensaje')) {
            error = document.createElement('div');
            error.className = 'error-mensaje';
            input.insertAdjacentElement('afterend', error);

            error.style.color = '#FF0000';
            error.style.fontFamily = 'var(--p-font)';
            error.style.fontSize = '0.9rem';
            error.style.marginTop = '-0.5rem';
            error.style.marginBottom = '1rem';
            error.style.display = 'block';
            error.style.transition = 'all 0.3s ease';
        }
        error.textContent = mensaje;

        input.style.borderColor = '#FF0000';
        input.style.color = '#FF0000';
    }

    function limpiarError(input) {
        const error = input.nextElementSibling;
        if (error && error.classList.contains('error-mensaje')) {
            error.remove();
        }

        input.style.borderColor = getCssVariable('--main-color');
        input.style.color = getCssVariable('--main-color');
    }

    function getCssVariable(variable) {
        return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    }

    function validarNombre(input) {
        const valor = input.value.trim();
        if (!valor) {
            mostrarError(input, 'The name cannot be empty.');
            return false;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/.test(valor)) {
            mostrarError(input, 'Must have at least 3 letters and only letters.');
            return false;
        } else {
            limpiarError(input);
            return true;
        }
    }

    function validarEmail(input) {
        const valor = input.value.trim();
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!valor) {
            mostrarError(input, 'Email cannot be empty.');
            return false;
        } else if (!regexEmail.test(valor)) {
            mostrarError(input, 'Must be a valid email address.');
            return false;
        } else {
            limpiarError(input);
            return true;
        }
    }

    function validarTelefono(input) {
        const valor = input.value.trim();
        const regexTelefono = /^\+?\d{1,3}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/;
        if (!valor) {
            mostrarError(input, 'The phone number cannot be empty.');
            return false;
        } else if (!regexTelefono.test(valor)) {
            mostrarError(input, 'Wrong phone format.');
            return false;
        } else {
            limpiarError(input);
            return true;
        }
    }

    function validarFecha(input) {
        const valor = input.value.trim();
        const fecha = new Date(valor);
        const hoy = new Date();
        if (!valor) {
            mostrarError(input, 'The date cannot be empty.');
            return false;
        } else if (isNaN(fecha.getTime()) || fecha > hoy) {
            mostrarError(input, 'The date must be a valid date and not in the future.');
            return false;
        } else {
            limpiarError(input);
            return true;
        }
    }

    function aplicarValidaciones(formulario, campos) {
        campos.forEach(campo => {
            const input = formulario.querySelector(campo.selector);
            if (!input) return;

            input.addEventListener('blur', () => campo.validacion(input));

            formulario.addEventListener('submit', (e) => {
                const valido = campo.validacion(input);
                if (!valido) e.preventDefault();
            });
        });
    }

    const formularioBrand = document.getElementById('join-form');
    if (formularioBrand) {
        aplicarValidaciones(formularioBrand, [
            { selector: '#name', validacion: validarNombre },
            { selector: '#email', validacion: validarEmail },
            { selector: '#phone', validacion: validarTelefono },
            { selector: '#dob', validacion: validarFecha },
        ]);
    }

    const formularioContact = document.querySelector('.contact-form__form');
    if (formularioContact) {
        aplicarValidaciones(formularioContact, [
            { selector: '#name', validacion: validarNombre },
            { selector: '#email', validacion: validarEmail },
        ]);
    }
});
