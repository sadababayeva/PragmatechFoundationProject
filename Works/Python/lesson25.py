class Student:

    school_name='X_lisesi'
    number_of_students=0
    

    def __init__(self, name, age, grades):
        self.name=name
        self.age=age
        self.grades=grades
        Student.number_of_students+=1
        

    def average(self):
        return sum(self.grades)/len(self.grades)


    def schoolName(self):
        return f'Okulumuzun adi {self.school_name} '

    @classmethod 
    def display_school_name(cls, name_of_school):
        cls.school_name=name_of_school    


Student.display_school_name("Y lisesi")
student_1=Student('seda', 23, [45,67,43])
student_2=Student('nermin',34, [45,89,12])        

print (Student.number_of_students)
print(student_1.average())
print(student_2.school_name)
print(student_1.__dict__)
print(Student.school_name)