import { useEffect, useState } from "react";
import { fetchQuizzes, deleteQuiz } from "../services/api";
import EditQuizModal from "../components/EditQuizModal";
import { Button } from "../components/ui/button";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "../components/ui/alert-dialog";

export default function Dashboard() {
  const [quizzes, setQuizzes] = useState([]);
  const [editingQuiz, setEditingQuiz] = useState(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    loadQuizzes();
  }, []);

  const loadQuizzes = async () => {
    const response = await fetchQuizzes();
    setQuizzes(response.data);
  };

  const handleDelete = async () => {
    if (deleteId !== null) {
      await deleteQuiz(deleteId);
      setQuizzes(quizzes.filter((quiz) => quiz.id !== deleteId));
      setDeleteId(null);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Quizzes</h2>
        <Button onClick={() => (window.location.href = "/create-quiz")} className="cursor-pointer">
          + Create Quiz
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="border p-4 rounded-lg shadow bg-white">
            <h3 className="text-lg font-semibold">{quiz.title}</h3>
            <p className="text-gray-500">{quiz.description}</p>
            <p className="text-sm text-gray-400 mt-1">
              Created on: {new Date(quiz.created_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
              })}
            </p>
            <div className="flex justify-between mt-2">
              <Button onClick={() => setEditingQuiz(quiz)} variant="outline">Edit</Button>

              {/* Delete Confirmation Dialog */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" onClick={() => setDeleteId(quiz.id)}>Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    Are you sure you want to delete this quiz?
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setDeleteId(null)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-red-500 hover:bg-red-600">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>

      {editingQuiz && <EditQuizModal quiz={editingQuiz} onClose={() => setEditingQuiz(null)} onUpdate={loadQuizzes} />}
    </div>
  );
}
