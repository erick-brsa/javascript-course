import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos } from './use-cases/render-todos';
import { renderPending } from './use-cases';

const ElementsIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    CrearCompletedButton: '.clear-completed',
    TodoFilters: '.filter',
    PendingCountLabel: '#pending-count'
}

/**
 * Monta la aplicación sobre el elemento cuyo id sea elementId
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementsIDs.TodoList, todos);
        updatePendingCount();    
    }

    const updatePendingCount = () => {
        renderPending(ElementsIDs.PendingCountLabel);
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;    
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // Referencias HTML
    const clearCompletedButton = document.querySelector( ElementsIDs.CrearCompletedButton );
    const newDescriptionInput  = document.querySelector( ElementsIDs.NewTodoInput );
    const todoListUL           = document.querySelector( ElementsIDs.TodoList );
    const filtersLIs            = document.querySelectorAll( ElementsIDs.TodoFilters );

    // Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');

        if (event.target.className) {
            todoStore.deleteTodo(element.getAttribute('data-id'))
            displayTodos();
            return;
        }

        todoStore.toggleTodo(element.getAttribute('data-id'))
        displayTodos();
    });

    clearCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLIs.forEach(( element ) => {
        element.addEventListener('click', (element) => {
            filtersLIs.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch(element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }
            displayTodos();    
        });
    });
}