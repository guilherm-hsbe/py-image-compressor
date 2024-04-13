/** Controls alert visibility */
function closeAlert() {
    let alert = document.getElementById('pnlAlert');
    alert.style.visibility = 'hidden'
}

/** Controls license modal visibility
 * @param {string} visibility
 */
function handleLicenseVisibility(visibility) {
    let license = document.getElementById('pnlLicense');
    license.style.visibility = visibility;
}

/** Hide license modal when outside click event triggers */
window.onclick = function(event) {
    let license = document.getElementById('pnlLicense');
    if (event.target == license)
        handleLicenseVisibility('hidden');
}

/** Set loading icons to file upload */
function handleFileUploadIcon() {
    let iconUpload = document.getElementById('icnUpload');
    iconUpload.classList.remove('fa', 'fa-cloud-upload');
    iconUpload.classList.add('fa-solid', 'fa-spinner', 'fa-spin');
}

/** Disabled the file input and set loading icon when file is detected */
function manageFileInput() {
    if (this.files && this.files[0]) {
        let file = this.files[0];
        this.disabled = true;
        handleFileUploadIcon();
    }
}
let fileUpload = document.getElementById('flUpload');
fileUpload.addEventListener('change', manageFileInput);