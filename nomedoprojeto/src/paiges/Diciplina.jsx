import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { FaCheck } from 'react-icons/fa'
import diciplinaValidator from './diciplinavalidator/diciplinaValidator';


const Diciplina = () => {

  const { register, handleSubmit, formState: {errors} } = useForm();

  function salvar(dados){
    console.log(dados)
  }

  return (
    <div>
      <h1>Diciplina</h1>

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nome: </Form.Label>
            <Form.Control type="text" {...register("name", diciplinaValidator.nome)} />
            {errors.name && <span>Campo Obrigatorio</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Curso: </Form.Label>
            <Form.Control type="text" {...register("curso", {required: true})} />
            {errors.curso && <span>Campo Obrigatorio</span>}
        </Form.Group>

        <div className='text-center'>
          <Button onClick={handleSubmit(salvar)} className='btn btn-success'><FaCheck/>salvar</Button>
        </div>
      </Form>




    </div>
  )
}

export default Diciplina