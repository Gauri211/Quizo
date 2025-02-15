import { Request, Response } from "express";
import db from "../config/db.config";

export const createQuiz = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const teacher_id = 1; // Static user for now

  try {
    await db.execute(
      "INSERT INTO quizzes (title, description, teacher_id, created_at) VALUES (?, ?, ?, NOW())",
      [title, description, teacher_id]
    );

    res.status(201).json({ message: "Quiz created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Database error", error });
  }
};


export const getQuizzes = async (req: Request, res: Response) => {
  try {
    const [quizzes] = await db.execute(
      "SELECT id, title, description, teacher_id, created_at FROM quizzes ORDER BY created_at DESC"
    );
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Database error", error });
  }
};


export const getQuizById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
      const [quiz] = await db.execute("SELECT * FROM quizzes WHERE id = ?", [id]);
  
      if ((quiz as any[]).length === 0) {
        res.status(404).json({ message: "Quiz not found" });
        return;
      }
  
      res.status(200).json(quiz);
    } catch (error) {
      res.status(500).json({ message: "Database error", error });
    }
  };

export const updateQuiz = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    await db.execute("UPDATE quizzes SET title = ?, description = ? WHERE id = ?", 
      [title, description, id]);

    res.status(200).json({ message: "Quiz updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Database error", error });
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await db.execute("DELETE FROM quizzes WHERE id = ?", [id]);

    res.status(200).json({ message: "Quiz deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Database error", error });
  }
};
