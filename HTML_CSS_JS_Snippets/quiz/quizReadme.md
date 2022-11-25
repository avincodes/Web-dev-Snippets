## How to use this ?
Step 1: Clone all the assests into your local computer\
Step 2: Add,modify or remove questions in quiz.js file\
Step 3: Modify the appearance by changing style.css accordingly.\
Step 4: Modify the quizLogo if you want.\
Step 5: If using django, add the quiz folder in templates and modify the views.py file
```
        def quiz(requests):
            return render(requests,'index.html')
           
```
Step 6: Modify urls.py
```
urlpatterns = [
    path('quiz/', views.quiz, name='quiz')
]
```
