$("#responsive-tab").click(function () {

			$("#responsive").show();
			$("#e_commerce").hide();
			$("#daily").hide();
			$("#search").hide();

			$("#responsive").addClass("activ");
            $("#e_commerce").removeClass("activ");
            $("#daily").removeClass("activ");
            $("#search").removeClass("activ");
		})

		$("#e_commerce-tab").click(function () {

			$("#responsive").hide();
			$("#e_commerce").show();
			$("#daily").hide();
			$("#search").hide();

			$("#responsive").removeClass("activ");
            $("#e_commerce").addClass("activ");
            $("#daily").removeClass("activ");
            $("#search").removeClass("activ");
		})

		$("#daily-tab").click(function () {

			$("#responsive").hide();
			$("#e_commerce").hide();
			$("#daily").show();
			$("#search").hide();

			$("#responsive").removeClass("activ");
            $("#e_commerce").removeClass("activ");
            $("#daily").addClass("activ");
            $("#search").removeClass("activ");
		})


		$("#search-tab").click(function () {

			$("#responsive").hide();
			$("#e_commerce").hide();
			$("#daily").hide();
			$("#search").show();

			$("#responsive").removeClass("activ");
            $("#e_commerce").removeClass("activ");
            $("#daily").removeClass("activ");
            $("#search").addClass("activ");
		})
