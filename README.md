# drawing board  **************   Week 7 Assessment    ************** 

Software Requirements:
 
1. The page must consist of a 500px X 500px board. The board must consist of a grid of 2px X 2px squares. (Not referring to the CSS grid, but you can use it if you want to).
2. The User must be able to select among 7 (increase if you want to) colours to put on the board by clicking on it. [Choose any combination of colours you want]
3. When the user clicks the left mouse button on a square, it should fill the square with the selected colour.
4. When the user clicks the left mouse button on a square and drags their mouse over other squares, it should fill all squares dragged over by the user with the selected colour.
5. When the user releases the left mouse button after clicking and dragging, it should stop colouring over the squares.
6. The user must be also able to change the currently selected colour using keyboard shortcuts. For example: Each number key selects a colour. OR, pick some other keyboard shortcut.
7. There must be a cancel button which the user can press to clear the board.
8. There must be a save button which the user can press to send the drawing to a backend where it will be saved in a database. Create an api and use any database of your choice.

**Extra Points For:**
- Stroke width setting
- Zooming

Output: 
![image](https://user-images.githubusercontent.com/40952778/196858388-948a82d4-5a71-49d9-8286-73f5cd2f339b.png)


### **Requirements:**
For development, you will need only Node.js installed in your environment.

Node:

- Just go on the official [Node.js website](https://nodejs.org/) and download the installer according to your system specifications.
- If the installation was successful, you should be able to run the following commands:
`node --version`
`npm --version`

- Make sure these two commands show versions not errors
- Now open any text editor you want and in the editor's terminal run this command: `npm init`
- Follow the steps and answer some questions and this will create necesssary folders in your working directory.
- Now install nodemon with this command:`npm i -g nodemon`
- This will download nodemon globally.
- Now install express with this command: `npm i -g express`
- Now install mongoose and MongoDB  with this command: `npm i -g mongoose`, `npm i mongodb`
- Also you can run the files by the help of nodemon using this command:     `nodemon "filename"` in our project  
   `nodemon express.js`
- open the browser and run localhost on port 4000 : `http://localhost:4000/`

### **DataBase** 
- when you click on save button after complete your drawing it will save as array in MongoDB database collection 
- open the MongoDB compass and check  the collection: database ii **Pixel-art** and the collection name is **ColloredPixels**




