function form() {
    const forms = document.querySelectorAll('form');

const messages = {
    loading: "Loading",
    done: "Your form is send",
    error: "Someting was wrong"
};

forms.forEach(form => {
    PostData(form);
});

function PostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statussMessage = document.createElement('div');
        statussMessage.classList.add('status');


        statussMessage.textContent = messages.loading;
        form.append(statussMessage);

        const formData = new FormData(form);
/*         const obj = {};
        formData.forEach((value,key) => {
            obj[key] = value;
        }); */

        fetch('mailer/server.php', {
            method: 'POST',
/*             headers: {
                'Content-type': 'application/json'
            }, */
            body: formData
        })
        .then(data => data.text())
        .then(data => {
            console.log(data);
            statussMessage.textContent = messages.done;
            setTimeout(() => {
                statussMessage.remove();
            },2000);
        }).catch(() => {
            statussMessage.textContent = messages.error;
            setTimeout(() => {
                statussMessage.remove();
            }, 2000);
        }).finally(() => {
            form.reset();
        });
    });
}
}

export default form;
