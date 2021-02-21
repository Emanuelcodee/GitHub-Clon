class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(){
        this.profile.innerHTML = `
            <div>
                User Goes Here
            </div>
        `;
    }
}

module.exports = UI;