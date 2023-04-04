import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private'
import type { Question } from './types';

const db = new Database(DB_PATH, { verbose: console.log });

export function getQuestions(): Question[] {
  const sql = `
  select question_id as questionId
  , question as question
  , parent_id as parentId
from questions
  `;
  const stmnt = db.prepare(sql);
  const rows = stmnt.all();
  return rows as Question[];
}

export function getQuestionById(questionId: number): Question[] {
  const sql = `
  select question_id as questionId
  , question as question
  , parent_id as parentId
from questions
where questions.question_id = $questionId  
  `;
  const stmnt = db.prepare(sql);
  const row = stmnt.get({ questionId });
  return row as Question[];
}

export function getChildren(questionId: number): Question[] {
  const sql = `
  select question_id as questionId
  , question as question
  , parent_id as parentId
from questions
where questions.parent_id = $questionId  
  `;
  const stmnt = db.prepare(sql);
  const rows = stmnt.all({ questionId });
  return rows as Question[];
}

export function getParent(questionId: number): Question[] {
  const sql = `
  select parent.question_id as questionId
  , parent.question as question
  , parent.parent_id as parentId
from questions child
join questions parent
on child.parent_id = parent.question_id
where child.question_id = $questionId  
  `;
  const stmnt = db.prepare(sql);
  const row = stmnt.get({ questionId });
  return row as Question[];
}

export function updateQuestion(questionId: number, question: string): void {
  const sql = `
  update questions
     set question = $question
   where question_id = $questionId
`;
  const stmnt = db.prepare(sql);
  stmnt.run({ questionId, question });
}

export function addQuestion(question: string, parentId: number): void {
  const sql = `
  insert into questions (question, parent_id)
  values ($question, $parentId)
`;
  const stmnt = db.prepare(sql);
  stmnt.run({ question, parentId });
}

export function deleteQuestion(questionId: number): void {
  const sql = `
  delete from questions
  where question_id = $questionId
`;
  const stmnt = db.prepare(sql);
  stmnt.run({ questionId });
}
