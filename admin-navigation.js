// Admin Dashboard Navigation & CSV Upload Handling

document.addEventListener('DOMContentLoaded', function() {
    console.log('Admin navigation initialized');

    // Navigation handling
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(navItem) {
        navItem.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all nav items
            navItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Add active class to clicked nav item
            this.classList.add('active');

            // Get the view ID from the data attribute
            const viewId = this.getAttribute('data-view-id');

            // Hide all content views
            const contentViews = document.querySelectorAll('.content-view');
            contentViews.forEach(function(view) {
                view.classList.remove('active');
            });

            // Show the selected content view
            const targetView = document.getElementById(viewId);
            if (targetView) {
                targetView.classList.add('active');
            }
        });
    });

    // CSV Upload Handling
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(function(input) {
        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(event) {
                const text = event.target.result;
                console.log(`Read file: ${file.name}`);
                console.log(text);

                // TODO: Add CSV parsing and data validation here.
                // Example: Use PapaParse or custom parsing logic.

                // Sample:Notify user of successful read
                alert(`File "${file.name}" loaded successfully.`);
            };
            reader.onerror = function() {
                alert(`Failed to read file "${file.name}".`);
            }
            reader.readAsText(file);
        });
    });

});
