import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../pages/contacto.css';
function ContactForm() {
  const [state, handleSubmit] = useForm("xdobqydl");
  if (state.succeeded) {
     alert("Gracias por contactarnos");
  }
  return (
    <div>
   

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Contactanos</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <form onSubmit={handleSubmit}>
    <h5 className="text-start">Email</h5>
    <input
    className="form-control"
      id="email"
      type="email" 
      name="email"
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
 <h5 className="text-start">Mensaje</h5>
    <textarea
      
      id="message"
      className="form-control"
      name="message"
     
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />
    <button type="submit" class="mt-8 flex flex-col gap-y-4"disabled={state.submitting} id="liveToastBtn">
      Enviar
    </button>
  </form>

         
          </div>
        </div>
      </div>
    </div>
    </div>

 
 

  );
}
function Contacto() {
        return (
          <ContactForm />
        );
      }
      export default Contacto;
            
	

