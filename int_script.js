/* Сверстать форму с полями пользователя (name, surname, age) и кнопкой “submit”.
Сверстать таблицу для отображения пользователей с колонками (name, surname, age).
При нажатии в форме на кнопку  “submit” мы добавляем пользователя в таблицу друг за другом.
Если какое-то поле не заполнено, пользователь не добавляется, показывается ошибка.
Сверстать кнопку “Delete All” которая будет очищать таблицу от пользователей. */

'use strict';

const table = document.querySelector('table');

const addEntry = () => {
  const nI = document.querySelector('input[name=name]');
  const sI = document.querySelector('input[name=surname]');
  const aI = document.querySelector('input[name=age]');

  const emptyField = [nI, sI, aI].find(el => !el.value);

  if (emptyField) {
    const label = emptyField.parentNode.querySelector('label').innerText;
    alert(`Поле '${label}' не заполнено`);
    return;
  }

  const emptyRow = table.querySelector('tr.empty');
  if (emptyRow) emptyRow.remove();
  const num = table.querySelectorAll('tbody tr').length;
  table.querySelector('tbody').innerHTML += getRow(num + 1, nI.value, sI.value, aI.value);
  nI.value = null;
  sI.value = null;
  aI.value = null;
}

const removeAll = () => {
    table.querySelector('tbody').innerHTML = getEmptyRow();
}

const getEmptyRow = () => {
    return `<tr class="empty"><td colspan="4">-</td></tr>`;
}

const getRow = (num, name, surname, age) => {
    return `<tr>
        <td class="collapsing">${num}</td>
        <td class="collapsing">${name}</td>
        <td class="collapsing">${surname}</td>
        <td>${age}</td>
    </tr>`;
}

document.querySelector('button[name=remove]').addEventListener('click', removeAll);
document.querySelector('button[name=submit]').addEventListener('click', addEntry);