document.addEventListener('DOMContentLoaded', () => {
    // Simulação de um banco de dados
    // Na primeira vez que o app é aberto, esses dados são salvos no localStorage.
    const initializeData = () => {
        if (!localStorage.getItem('users')) {
            const users = [
                { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
                { id: 2, username: 'prof.ana', password: 'ana123', role: 'teacher' },
                { id: 3, username: 'aluno.joao', password: 'joao123', role: 'student' }
            ];
            const teachers = [
                { id: 2, name: 'Ana Silva', userId: 2, classIds: [101] }
            ];
            const students = [
                { id: 3, name: 'João Pereira', userId: 3, classId: 101 }
            ];
            const classes = [
                { id: 101, name: 'Turma 301' }
            ];
            const grades = [
                { studentId: 3, nota1: 8.5, nota2: 9.0 }
            ];
            const attendance = [
                { studentId: 3, date: '2024-05-20', status: 'presente' },
                { studentId: 3, date: '2024-05-21', status: 'falta' }
            ];

            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('teachers', JSON.stringify(teachers));
            localStorage.setItem('students', JSON.stringify(students));
            localStorage.setItem('classes', JSON.stringify(classes));
            localStorage.setItem('grades', JSON.stringify(grades));
            localStorage.setItem('attendance', JSON.stringify(attendance));
            
            console.log('Dados iniciais carregados no localStorage.');
        }
    };

    initializeData();

    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Salva o usuário logado na sessionStorage (dura apenas enquanto a aba estiver aberta)
            sessionStorage.setItem('loggedInUser', JSON.stringify(user));

            switch (user.role) {
                case 'admin':
                    window.location.href = 'admin.html';
                    break;
                case 'teacher':
                    window.location.href = 'teacher.html';
                    break;
                case 'student':
                    window.location.href = 'student.html';
                    break;
                default:
                    loginError.textContent = 'Perfil de usuário desconhecido.';
            }
        } else {
            loginError.textContent = 'Usuário ou senha inválidos.';
        }
    });
});