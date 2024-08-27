# Calculator Entropy for 20595 כריית מידע‏

1. Install NodeJs - [NodeJS download](https://nodejs.org/en/download/prebuilt-installer)
2. Insert data in src/data.js file:
    * columnXData - the data column
    * columnYData - the target column
3. Run index file - "node src/index.js" 

## Example input

```
const columnXData = `2
 3
 3
 1
 0
 2`;
 
 const columnYData = `0
 0
 0
 0
 1
 1`;

```


## Example output

```
2/16(-1/2log(1/2)-1/2log(1/2))+0/16()+2/16(-2/2log(2/2))+1/16(-1/1log(1/1))+1/16(-1/1log(1/1)) = 0.1250

```



Good luck in your test :)

Ori Nahum
