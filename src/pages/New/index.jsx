import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import {Section} from '../../components/Section'
import {Button} from '../../components/buttons'
import {ButtonText} from '../../components/ButtonText'

import {api} from '../../services/api'

import { Container, Form} from './styles'

import { NoteItem } from '../../components/NoteItem'



export function New(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    function handleAddLink (){
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted) )
    }

    async function handleNewNote(){
        if(!title){
            return alert("Digite um titulo para a nota")
        }

        if(newTag){
            return alert('Voce deixou uma tag no campo para adicionar')
        }

        if(newLink){
            return alert('Voce deixou um link no campo para adicionar')
        }
        await api.post("/notes", {
            title,
            description,
            tags,
            links
        } )

        alert("nota criada com sucesso")
        navigate(-1)
    }
    

    return(
        <Container>
            <Header/>

        <main>
            <Form>
                <header>
                    <h1>Criar nota</h1>
                    <ButtonText title={"Voltar"} onClick={handleBack}/>
                    
                </header>

                <Input 
                placeholder="Titulo"
                 onChange={e => setTitle(e.target.value)}
                 />

                <Textarea
                 placeholder="Observações"
                 onChange={e => setDescription(e.target.value)}
                 />

                <Section title="Links úteis">

                    {
                        links.map((link, index) => (
                            <NoteItem
                            key={String(index)}
                             value={link}
                             onClick={() => handleRemoveLink(link)}
                             />
                        ))
                    }
                    <NoteItem
                     isNew
                      placeholder="Novo link"
                      value={newLink}
                      onChange={e => setNewLink(e.target.value)}
                      onClick={handleAddLink}
                      />
                </Section>

                <Section title="Marcadores">
                    <div className='tags'>

                        {
                         tags.map((tag, index) => (
                            <NoteItem
                            key={String(index)}
                             value={tag}
                             onClick={() => handleRemoveTag(tag)}

                             />
                         ))
                         

                        }
                        <NoteItem
                         isNew
                         placeholder="Nova Tag"
                         onChange={e => setNewTag(e.target.value)}
                         value={newTag}
                         onClick={handleAddTag}
                         />
                    </div>
                </Section>

                <Button title="Salvar" onClick={handleNewNote}/>
            </Form>
        </main>
            
        </Container>
    )
}