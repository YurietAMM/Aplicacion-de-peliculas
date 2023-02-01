import { AbstractControl, ValidatorFn } from "@angular/forms";

export function PrimeraLetraMayuscula(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value as string;
    if (!value || value.length === 0) return null;

    const primeraLetra = value[0];
    if (primeraLetra !== primeraLetra.toUpperCase()) {
      return { primeraLetraMayuscula: 'La primera letra debe ser en mayúscula' };
    }
    return null;
  };
}
