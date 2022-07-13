import React , {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup,Label,Input,Form,Button, Row, Col } from 'reactstrap';
import { FaPaperPlane, FaPlus , FaTrash} from 'react-icons/fa';


function App() {
  const [inputFields, setInputFields] = useState([
    {
      description: {ar:'',en:''},
      title: {ar:'',en:''},
      category:'',
      rules:{ar:'',en:''},
    }])

  const [questions,setQuestions] = useState([
    {
      body:{ar:'',en:''},
      type:'',
    }
  ])

  const [answers,setAnswers] = useState([
    {
      body:{ar:'',en:''}
    }
  ])

  const addQuestion = () =>{
    setQuestions([...questions,{
      body:{ar:'',en:''},
      type:'',
    }])
  }
  const removeQuestion = (index) =>{
    const values =[...questions]
    if(values.length === 1){
      return
    }
    else{
      values.splice(index,1)
      setQuestions(values)
    }
  }

  const addAnswer = () =>{
    setAnswers([...answers,    {
      body:{ar:'',en:''}
    }])
  }

  const removeAnswer = (index) =>{
    const values = [...answers]
    if(values.length === 1){
      return
    }
    else{
      values.splice(index,1)
      setAnswers(values)
    }
  }

  const handleChangeQuestion =(index,e)=>{
    const values = [...questions]
    switch (e.target.name){
      case 'body-ar':
        values[index].body.ar = e.target.value
        break
      case 'body-en':
        values[index].body.en = e.target.value
        break
      default:
        values[index][e.target.name] = e.target.value
    }
    setQuestions(values)
  }

  
  const handleAnswerChange =(index,e)=>{
    const values = [...answers]
    switch (e.target.name){
      case 'answer-ar':
        values[index].body.ar = e.target.value
        break
      case 'answer-en':
        values[index].body.en = e.target.value
        break
      default:
        values[index][e.target.name] = e.target.value
    }
    values[index][e.target.name] = e.target.value
    setAnswers(values)
    
  }
  const handleInputFieldChange =(index,e)=>{
    const values = [...inputFields]
    switch (e.target.name){
      case 'title-ar':
        values[index].title.ar = e.target.value
        break;
      case 'title-en':
        values[index].title.en = e.target.value
        break;
      case 'description-ar':
        values[index].description.ar = e.target.value
        break;
      case 'description-en':
        values[index].description.en = e.target.value
        break
      case 'rules-ar':
        values[index].rules.ar = e.target.value
        break
      case 'rules-en':
        values[index].rules.en = e.target.value
        break
      default:
        values[index][e.target.name] = e.target.value
    }
    setInputFields(values)
  }



    const handleSubmit = (e) =>{
    e.preventDefault();
    let test ={}
    test.title = inputFields[0].title
    test.category = inputFields[0].category
    test.description = inputFields[0].description
    test.rules = inputFields[0].rules
    // for(let i = 0; i< questions.length ;i++){
    //   questions[i].answers = 'hello'
    //   console.log(inputFields[i])
    // }
    console.log(inputFields)
    console.log(questions)
    console.log(answers)
    // console.log(questions)
    // test.questions = questions
    // console.log(test)
    // const form = document.getElementById('testForm')
    // form.reset()
  }


  return (
    <Form id='testForm' className='px-4 my-3' onSubmit={handleSubmit}>
      {inputFields.map((field,index)=>(
        <>
        <FormGroup  key={index}>
          <Row className='my-2'>
            <Col sm={12} md={1}>
              <Label className='mt-2'>Title in Arabic</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input onChange={e=>{handleInputFieldChange(index,e)}}  placeholder='title-ar' type='text' name='title-ar'/>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={1}>
              <Label onChange={e=>{handleInputFieldChange(index,e)}} className='mt-2'>Title in English</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input onChange={e=>{handleInputFieldChange(index,e)}} placeholder='title-en' type='text' name='title-en'/>
            </Col>
          </Row>
          <Row className='my-2'>
            <Col sm={12} md={1}>
              <Label className='mt-2'>Description in Arabic</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input placeholder='description-ar'  type='text' onChange={e=>{handleInputFieldChange(index,e)}} name='description-ar' />
            </Col>
          </Row>
          <Row className='my-2'>
            <Col sm={12} md={1}>
              <Label className='mt-2'>Description in English</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input onChange={e=>{handleInputFieldChange(index,e)}} placeholder='description-en' type='text' name='description-en'/>
            </Col>
          </Row>        
          <Row className='my-2'>
            <Col sm={12} md={1}>
              <Label className='mt-2'>Category</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input onChange={e=>{handleInputFieldChange(index,e)}} placeholder='category' type='text' name='category'  />
            </Col>
          </Row>
          <Row className='my-2'>
            <Col sm={12} md={1}>
              <Label className='mt-2'>Rules in Arabic</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input  onChange={e=>{handleInputFieldChange(index,e)}} type='textarea' name='rules-ar' placeholder='rules-ar'  />
            </Col>
          </Row>
          <Row className='my-2'>
            <Col sm={12} md={1}>
              <Label className='mt-2'>Rules in English</Label>
            </Col>
            <Col sm={12} md={11}>
              <Input  onChange={e=>{handleInputFieldChange(index,e)}} type='textarea' name='rules-en' placeholder='rules-en'  />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup >
        {questions.map((question,i)=>(  
          <div key={i} className='border p-4 rounded border-2 border-dark my-3'>
            
            <Row className='my-2'>
              <Col sm={12} md={1}>
                <Label className='mt-2'>Body in Arabic</Label>
              </Col>
              <Col sm={12} md={11}>
                <Input onChange={e=>{handleChangeQuestion(i,e)}} placeholder='body-ar' type='text' name='body-ar'  />
              </Col>
            </Row>
            <Row className='my-2'>
              <Col sm={12} md={1}>
                <Label className='mt-2'>Body in English</Label>
              </Col>
              <Col sm={12} md={11}>
                <Input onChange={e=>{handleChangeQuestion(i,e)}} placeholder='body-en' type='text' name='body-en'  />
              </Col>
            </Row>
            <Row className='my-2'>
              <Col sm={12} md={1}>
                <Label className='mt-2'>Type</Label>
              </Col>
              <Col sm={12} md={11}>
                <Input onChange={e=>{handleChangeQuestion(i,e)}} placeholder='type' type='text' name='type' />
              </Col>
            </Row>
            {answers.map((answer,j)=>(
              <>
                <div>Answers for the above question</div>
                <div key={j} className='border p-4 rounded border-2 border-dark my-3'>
                  <Row className='my-2'>
                    <Col sm={12} md={1}>
                      <Label className='mt-2'>Answer in Arabic</Label>
                    </Col>
                    <Col sm={12} md={11}>
                      <Input onChange={e=>{handleAnswerChange(j,e)}} placeholder='answer-ar' type='text' name='answer-ar'  />
                    </Col>
                  </Row>
                  <Row className='my-2'>
                    <Col sm={12} md={1}>
                      <Label className='mt-2'>Answer in English</Label>
                    </Col>
                    <Col sm={12} md={11}>
                      <Input onChange={e=>{handleAnswerChange(j,e)}} placeholder='answer-en' type='text' name='answer-en'/>
                    </Col>
                  </Row>
                  <Button className='mt-3 mx-2 btn-success'  onClick={()=>{addAnswer()}}>Add Answer <FaPlus/></Button>
                  <Button className='mt-3 mx-2 btn-danger' onClick={()=>{removeAnswer(j)}}>Delete Answer <FaTrash/></Button>
                </div>
              </>
            ))}
            <Button onClick={()=>{addQuestion()}} className='mt-3 mx-2 btn-success'>Add new question <FaPlus/></Button>
            <Button className='mt-3 mx-2 btn-danger' onClick={()=>{removeQuestion(i)}}>Delete question  <FaTrash/></Button>
            </div>
        ))
        }
        </FormGroup>
        </>
      ))}
      <Button type='submit'>Submit <FaPaperPlane/></Button>
    </Form>
  );
}

export default App;
