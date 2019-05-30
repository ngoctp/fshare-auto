(function($) {
    var fa = new function() {
        var self = this;

        self.main = function() {
            jQuery('button.download-btn').first().click();

            // hide ads
            jQuery('.video').hide();

            // auto closing
            // var closeInterval = setInterval(function () {
            //     if (jQuery('div.download.hidden').length) {
            //         clearInterval(closeInterval);
            //         window.close();
            //     }
            // }, 1000)

        }
    }

    fa.main();

})(jQuery);
