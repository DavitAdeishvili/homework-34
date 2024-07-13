import turtle

# Function to draw a rectangle
def draw_rectangle(x, y, width, height, color):
    turtle.penup()
    turtle.goto(x, y)
    turtle.pendown()
    turtle.color(color)
    turtle.begin_fill()
    for _ in range(2):
        turtle.forward(width)
        turtle.right(90)
        turtle.forward(height)
        turtle.right(90)
    turtle.end_fill()

# Function to draw a triangle
def draw_triangle(x, y, base, height, color):
    turtle.penup()
    turtle.goto(x, y)
    turtle.pendown()
    turtle.color(color)
    turtle.begin_fill()
    turtle.right(90)
    turtle.forward(base / 2)
    turtle.right(120)
    turtle.forward(base)
    turtle.right(120)
    turtle.forward(base)
    turtle.right(120)
    turtle.forward(base / 2)
    turtle.end_fill()

# Function to draw battlements
def draw_battlements(x, y, width, height):
    turtle.penup()
    turtle.goto(x, y)
    turtle.pendown()
    for _ in range(5):
        turtle.forward(width / 5)
        turtle.left(90)
        turtle.forward(height)
        turtle.backward(height)
        turtle.right(90)

# Main drawing starts here
turtle.speed(1)

# Draw the main castle structure
draw_rectangle(-150, -100, 300, 200, "gray")

# Draw towers with conical roofs
draw_rectangle(-120, 100, 60, 100, "lightgray")
draw_triangle(-150, 200, 300, 100, "darkgray")
draw_rectangle(60, 100, 60, 100, "lightgray")
draw_triangle(30, 200, 300, 100, "darkgray")

# Draw battlements on the main castle
draw_battlements(-150, -100, 300, 20)

# Draw battlements on the towers
draw_battlements(-120, 100, 60, 20)
draw_battlements(60, 100, 60, 20)

# Draw door
draw_rectangle(-20, -100, 40, 80, "brown")

# Draw windows on the towers
draw_rectangle(-110, 150, 20, 30, "lightblue")
draw_rectangle(70, 150, 20, 30, "lightblue")

# Draw flag on the top of the castle
turtle.penup()
turtle.goto(0, 210)
turtle.pendown()
turtle.color("red")
turtle.begin_fill()
turtle.circle(15)
turtle.end_fill()

# Hide the turtle and display the result
turtle.hideturtle()
turtle.done()