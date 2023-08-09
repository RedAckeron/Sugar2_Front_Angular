import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control:AbstractControl):ValidationErrors | null
{
let error:ValidationErrors;
if (control.value)
  {
    if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
    {
      error={message:"Votre Email est incorrect"}
      return error;
    }
if(control.value.length<=5)
{

  //return ={message:"pas bien "}
}
return null
  }
  else
  {
    return null
  }

}

