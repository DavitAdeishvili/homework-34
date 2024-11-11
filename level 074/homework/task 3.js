// document.createElement()

// 1. ახალი <div> ელემენტის შექმნა
const newDiv = document.createElement('div');
newDiv.textContent = 'ეს არის ახალი div!';

// 2. ახალი <p> ელემენტის შექმნა
const newParagraph = document.createElement('p');
newParagraph.textContent = 'ეს არის ახალი პარაგრაფი!';

// 3. ახალი <ul> ელემენტის შექმნა
const newList = document.createElement('ul');

// 4. ახალი <li> ელემენტის შექმნა
const newListItem = document.createElement('li');
newListItem.textContent = 'სიაში პირველი ელემენტი';

// 5. ახალი <button> ელემენტის შექმნა
const newButton = document.createElement('button');
newButton.textContent = 'დაწკაპეთ აქ!';

// ------------------------------------------------------------------------------------------------------------------------------------------------

// appendChild(node)

// 1. ახალი <div> ელემენტის დამამატება
const container = document.getElementById('container');
container.appendChild(newDiv); // newDiv ელემენტი container-ში მიემატება

// 2. ახალი <p> ელემენტის დამატება
container.appendChild(newParagraph); // newParagraph ელემენტი container-ში მიემატება

// 3. ახალი <li> ელემენტის სიაში დამატება
newList.appendChild(newListItem); // newListItem ელემენტი newList-ში მიემატება

// 4. ახალი <button> ელემენტის დამატება
container.appendChild(newButton); // newButton ელემენტი container-ში მიემატება

// 5. <ul> სიაში დამატება
container.appendChild(newList); // newList ელემენტი container-ში მიემატება

// -----------------------------------------------------------------------------------------------------------------------------------------------

// insertBefore()

// 1. <p> ელემენტის სხვა <p> ელემენტზე მარჯვნივ დამატება
const referenceNode = document.getElementById('referencePara');
container.insertBefore(newParagraph, referenceNode); // newParagraph referenceNode-ზე ადრე დაემატება

// 2. სიაში <li> ელემენტის დამატება
newList.insertBefore(newListItem, newList.firstChild); // newListItem დაემატება სიაში პირველ ადგილას

// 3. ახალი <p> ელემენტის დამატება
const anotherParagraph = document.createElement('p');
anotherParagraph.textContent = 'ეს არის მეორე პარაგრაფი!';
container.insertBefore(anotherParagraph, referenceNode); // newParagraph referenceNode-ზე ადრე დაემატება

// 4. <ul> სიაში ახალი ელემენტის დამატება
const anotherListItem = document.createElement('li');
anotherListItem.textContent = 'სიაში მეორე ელემენტი';
newList.insertBefore(anotherListItem, newListItem); // anotherListItem პირველი ელემენტის წინ

// 5. ახალი <h2> ელემენტის დამატება
const newHeader = document.createElement('h2');
newHeader.textContent = 'ახალი სათაური';
container.insertBefore(newHeader, container.firstChild); // newHeader ხდება container-ის პირველი ელემენტი

// -----------------------------------------------------------------------------------------------------------------------------------------------

// removeChild(node)

// 1. <div> ელემენტის წაშლა
const divToRemove = document.getElementById('removeMe');
container.removeChild(divToRemove); // divToRemove ელემენტი container-დან წაიშლება

// 2. <p> ელემენტის წაშლა
const paragraphToRemove = document.getElementById('removeThisPara');
container.removeChild(paragraphToRemove); // paragraphToRemove ელემენტი container-დან წაიშლება

// 3. <li> ელემენტის წაშლა
newList.removeChild(newListItem); // newListItem ელემენტი newList-დან წაიშლება

// 4. <button> ელემენტის წაშლა
container.removeChild(newButton); // newButton ელემენტი container-დან წაიშლება

// 5. <ul> ელემენტის წაშლა
container.removeChild(newList); // newList ელემენტი container-დან წაიშლება

// -----------------------------------------------------------------------------------------------------------------------------------------------

// parentNode

// 1. <div> ელემენტის parentNode-ის პოვნა
const parentDiv = newDiv.parentNode; // parentDiv ხდება container, სადაც newDiv არის

// 2. <p> ელემენტის parentNode-ის პოვნა
const paragraphParent = newParagraph.parentNode; // paragraphParent არის container

// 3. <li> ელემენტის parentNode-ის პოვნა
const listItemParent = newListItem.parentNode; // listItemParent არის newList

// 4. <button> ელემენტის parentNode-ის პოვნა
const buttonParent = newButton.parentNode; // buttonParent არის container

// 5. <ul> ელემენტის parentNode-ის პოვნა
const listParent = newList.parentNode; // listParent არის container

// -----------------------------------------------------------------------------------------------------------------------------------------------

// replaceChild(newNode, oldNode)

// 1. <p> ელემენტის შეცვლა
const replacementParagraph = document.createElement('p');
replacementParagraph.textContent = 'ეს არის ჩანაცვლებული პარაგრაფი';
container.replaceChild(replacementParagraph, newParagraph); // newParagraph ჩანაცვლდება replacementParagraph-ით

// 2. <li> ელემენტის ჩანაცვლება
const replacementListItem = document.createElement('li');
replacementListItem.textContent = 'ახალი ელემენტი';
newList.replaceChild(replacementListItem, newListItem); // newListItem ჩანაცვლდება replacementListItem-ით

// 3. <div> ელემენტის ჩანაცვლება
const replacementDiv = document.createElement('div');
replacementDiv.textContent = 'ეს არის ჩანაცვლებული div';
container.replaceChild(replacementDiv, newDiv); // newDiv ჩანაცვლდება replacementDiv-ით

// 4. <h2> ელემენტის ჩანაცვლება
const replacementHeader = document.createElement('h2');
replacementHeader.textContent = 'ახალი სათაური';
container.replaceChild(replacementHeader, newHeader); // newHeader ჩანაცვლდება replacementHeader-ით

// 5. <button> ელემენტის ჩანაცვლება
const replacementButton = document.createElement('button');
replacementButton.textContent = 'ახალი ღილაკი';
container.replaceChild(replacementButton, newButton); // newButton ჩანაცვლდება replacementButton-ით