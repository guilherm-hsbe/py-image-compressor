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