import { Component, OnInit } from '@angular/core';
import { student_answer_class } from '../classes/student_answer_class';
import { question_class } from '../classes/question_class';
import { result_class } from '../classes/result_class';
import { ActivatedRoute } from '@angular/router';
import { QuestionPaperService } from '../services/question-paper.service';
import { QuestionService } from '../services/question.service';
import { StudentAnswerService } from '../services/student-answer.service';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-view-answersheet',
  templateUrl: './view-answersheet.component.html',
  styleUrls: ['./view-answersheet.component.css']
})
export class ViewAnswersheetComponent implements OnInit {

  id:number;
  spinner_Flag=0;
  Question_arr:question_class[]=[];
  ind:number=0;
  SelectedOption:string[]=[];

  Student_answers:student_answer_class[]=[];
  marks:number=0;
  colors:string[]=[];



  constructor(private act_router:ActivatedRoute,private qp_ser:QuestionPaperService,private question_ser:QuestionService,private stu_ans_ser:StudentAnswerService,private result_ser:ResultService) { }

  ngOnInit(): void {
     this.id=this.act_router.snapshot.params["id"];
    console.log(this.id);
    this.stu_ans_ser.getStudentAnswer(1,this.id).subscribe(
      (data:student_answer_class[])=>
      {
        this.Student_answers=data;
        console.log(this.Student_answers);
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
                for(let j=0;j<this.Question_arr.length;j++)
                {
                  this.SelectedOption[j]=null;
                  this.colors[j]="red";
                  for(let k=0;k<this.Student_answers.length;k++)
                  {
                    if(this.Question_arr[j].Answer==this.Student_answers[k].Answer_id)
                    {
                      this.SelectedOption[j]=this.Question_arr[j].Answer;
                      this.colors[j]="indigo";
                    }
                  }
                }
                this.spinner_Flag=1;
                console.log(this.Question_arr);
              }
            }
          );
        }

      }
    );

  }

}
