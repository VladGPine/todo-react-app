//Задание

//Создайте новое React - приложение.
//Выведите на страницу компонент < App /> средствами файла index.js.
//Компонент < App /> должен формировать код для вывода 3 - 4 флажков с каким - нибудь текстом, следующим после них.Текст может быть оформлен с помощью тегов < p > или<span>.То, что у вас получится, должно напоминать список дел, в который уже внесены некие записи.

//Решение:

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
