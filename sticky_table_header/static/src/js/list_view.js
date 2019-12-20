odoo.define('sticky_table_header.ListView',function(require){

    "use strict";

    var ListRenderer = require('web.ListRenderer');
    ListRenderer.include({
        init: function (parent, state, params) {

            $(document).delegate("table.o_list_view","mouseenter", function(){


                $(document).find('table.o_list_view').each(function()
                {
                    $(this).stickyTableHeaders({
                        "scrollableArea": $(document).find('div.o_content'),
                        "leftOffset": 0,
                        //marginTop: 0,
                        "fixedOffset": 0,

                    })
                });
                return ;
            });
           return this._super.apply(this, arguments);
        },
    });
});
