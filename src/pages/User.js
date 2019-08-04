import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export const User = ({ userId }) => {
  const { removeAuth } = useContext(Context)
  return <Fragment>
    <Layout title='User' subtitle='Has ingresado correctamente :)'>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </Layout>
  </Fragment>
}
