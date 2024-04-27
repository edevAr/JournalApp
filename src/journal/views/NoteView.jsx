import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { ImageGalery } from './ImageGalery'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startSavingNote } from '../../store/journal/thunks'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {
    const dispatch = useDispatch()
    const {active: note, messageSaved, isSaving} = useSelector(state => state.journal);
    const {body, title, date, onInputChange, formState} = useForm(note)

    const dateString = useMemo(() => {
        const newDate = new Date(date) 
        return newDate.toUTCString()
    }, [date])

    useEffect(() => {
      dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
      if(messageSaved.length > 0){
        Swal.fire('Nota actualizada', messageSaved, 'success')
      }
    }, [messageSaved])
    

    const onSaveNote=() => {
        dispatch(startSavingNote())
    }
    

  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}} className='animate__animated animate__fadeIn animate__faster'>
        <Grid item>
            <Typography fontSize={39} fontWeight='ligth'>
                {dateString}
            </Typography>
        </Grid>
        <Grid item>
            <Button 
                disabled={isSaving}
                onClick={onSaveNote}
                color='primary' 
                sx={{padding: 2}}
            >
                <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Ingrese un titulo'
                label= 'Titulo'
                sx={{border: 'none', mb: 1}}
                name='title'
                value={title}
                onChange={onInputChange}
            />
            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='Que sucedio en el dia de hoy?'
                minRows={5}
                name='body'
                value={body}
                onChange={onInputChange}
            />
        </Grid>
        <ImageGalery/>
    </Grid>
  )
}
