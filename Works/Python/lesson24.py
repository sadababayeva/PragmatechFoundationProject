class Car:
    def __init__(self, brand, model, year):
        self.brand=brand
        self.model=model
        self.year=year


    def brandmodel (self):
        return f'Arabanin markasi {self.brand} ve modeli {self.model}'


car_1=Car('BMW', 'i5', 2020)
car_2=Car('Audi', 'x6', 2003)


print (car_1.brandmodel())


class Movie:
    def __init__(self, name, director):
        self.name=name
        self.director=director


movie_1=Movie('Full Metal Jacket', 'Kubrick')
movie_2=Movie('Babel','Irarutu')

print (movie_1.director)
print (movie_2.name)