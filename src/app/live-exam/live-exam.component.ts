import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionPaperService } from '../services/question-paper.service';
import { question_class } from '../classes/question_class';
import { QuestionService } from '../services/question.service';
import { student_answer_class } from '../classes/student_answer_class';
import { StudentAnswerService } from '../services/student-answer.service';
import { ResultService } from '../services/result.service';
import { result_class } from '../classes/result_class';
import { student_exam_class } from '../classes/student_exam_class';
import { StudentExamService } from '../services/student-exam.service';


@Component({
  selector: 'app-live-exam',
  templateUrl: './live-exam.component.html',
  styleUrls: ['./live-exam.component.css']
})
export class LiveExamComponent implements OnInit {

  id:number;
  exam_id:number;
  spinner_Flag=0;
  Question_arr:question_class[]=[];
  ind:number=0;
  SelectedOption:string;
  Student_answers:student_answer_class[]=[];
  marks:number=0;
  colors:string[]=[];
  hours:number;
  minutes:number;
  seconds:number;
  onSaveNext()
  {
    if(this.ind<this.Question_arr.length)
    {
      this.Student_answers[this.ind].Question_id=this.Question_arr[this.ind].Question_id;
      this.Student_answers[this.ind].Answer_id=this.SelectedOption;
      if(this.SelectedOption!=null)
      {
        this.colors[this.ind]="primary";
      }
      else
      {
        this.colors[this.ind]="warn";
      }

      this.ind=this.ind+1;
    }
    else
    {
      this.onClickSubmit();
    }
    if(this.ind<this.Question_arr.length)
    {
      this.SelectedOption=this.Student_answers[this.ind].Answer_id;
    }

  }
  onPrevious()
  {
    if(this.ind>0)
    {
      this.ind=this.ind-1;
    }
    this.SelectedOption=this.Student_answers[this.ind].Answer_id;
  }


  onClickSubmit()
  {
    this.Student_answers[this.ind].Question_id=this.Question_arr[this.ind].Question_id;
    this.Student_answers[this.ind].Answer_id=this.SelectedOption;
    if(this.SelectedOption!=null)
    {
      this.colors[this.ind]="primary";
    }
    else
    {
      this.colors[this.ind]="warn";
    }
    let i=0;
    this.marks=0;
    for(i=0;i<this.Question_arr.length;i++)
    {
      if(this.Student_answers[i].Answer_id!=null)
      {
        this.stu_ans_ser.addStudentAnswer(new student_answer_class(this.Question_arr[i].Question_id,this.Student_answers[i].Answer_id,this.exam_id)).subscribe(
          (data:any)=>
          {
            console.log(data);
          }
        );
      }

      if(this.Question_arr[i].Answer==this.Student_answers[i].Answer_id)
      {
        this.marks+=4;
      }
    }
    if(i==this.Question_arr.length)
    {
      alert("Marks Obtained: "+this.marks);
      console.log(this.id);
      console.log(this.marks);
      this.result_ser.addStudentAnswer(new result_class(this.exam_id,this.marks)).subscribe(
        (data:any)=>
        {
          console.log(data);
        }
      );
    }
      console.log(this.Student_answers);
  }

  onClickPallette(i)
  {
    this.ind=i;
    this.SelectedOption=this.Student_answers[this.ind].Answer_id;
  }

  onClickOptionchange(ind)
  {
    console.log(ind+" "+this.SelectedOption);
  }

  constructor(private act_router:ActivatedRoute,private qp_ser:QuestionPaperService,private question_ser:QuestionService,private stu_ans_ser:StudentAnswerService,private result_ser:ResultService,private stu_exam_ser:StudentExamService) { }

  ngOnInit(): void {
     this.id=this.act_router.snapshot.params["id"];
    console.log(this.id);

    this.stu_exam_ser.addStudentExam(new student_exam_class(1,this.id)).subscribe(
      (data:any)=>
      {
        this.exam_id=data.insertId;
      }
    );


    this.qp_ser.getQuestionPaper(this.id).subscribe(
      (data:question_class[])=>
      {
        console.log(data);
        let x=data.length;
        for(let i=0;i<data.length;i++)
        {
          this.question_ser.getQuestionByQuestioId(data[i].Question_id).subscribe(
            (data:question_class[])=>
            {
              console.log(data);
              this.Question_arr.push(data[0]);
              if(x==this.Question_arr.length)
              {
                this.spinner_Flag=1;
                console.log(this.Question_arr);
                for(let j=0;j<this.Question_arr.length;j++)
                {
                  this.Student_answers[j]=new student_answer_class(null,null);
                  this.colors[j]="";
                }
              }
            }
          );
        }

      }
    );

  }

}
