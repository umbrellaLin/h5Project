//import $ from 'jquery'

window.jQuery = $

document.write("This text comes from an external script.");

function myFun() {
  $('#h1').html('hello js')
}

function ShowAnswer(){
  document.getElementById("AnswerBox").innerHTML='2';
}

function ChangeFontColor(){
  const OriginalFont = document.getElementById("StringFont").innerHTML;
  document.getElementById("StringFont").innerHTML = '<font color="blue">' + OriginalFont + '</font>';
}

function ChangeString() {
  const NewStringValue = document.getElementById('StringTextBox').value
  document.getElementById('NewStringBox').innerHTML = NewStringValue
}