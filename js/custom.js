AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

$(function(){

	'use strict';

	$(".loader").delay(200).fadeOut("slow");
	$("#overlayer").delay(200).fadeOut("slow");	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
			$('.site-mobile-menu .has-children').each(function(){
				var $this = $(this);
				
				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle' : 'collapse',
					'data-target' : '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class' : 'collapse',
					'id' : 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
			var $this = $(this);
			if ( $this.closest('li').find('.collapse').hasClass('show') ) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();  
			
		});

		$(window).resize(function() {
			var $this = $(this),
			w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
					$('body').find('.js-menu-toggle').removeClass('active');
				}
			}
		});
	}; 
	siteMenuClone();

	var owlPlugin = function() {
		if ( $('.owl-3-slider').length > 0 ) {
			var owl3 = $('.owl-3-slider').owlCarousel({
				loop: true,
				autoHeight: true,
				margin: 10,
				autoplay: true,
				smartSpeed: 700,
				items: 1,
				nav: true,
				dots: true,
				navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					800: {
						items:2
					},
					1000:{
						items:2
					},
					1100:{
						items:3
					}
				}
			});
		}
		if ( $('.owl-4-slider').length > 0 ) {
			var owl4 = $('.owl-4-slider').owlCarousel({
				loop: true,
				autoHeight: true,
				margin: 10,
				autoplay: true,
				smartSpeed: 700,
				items: 4,
				nav: true,
				dots: true,
				navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					800: {
						items:2
					},
					1000:{
						items:3
					},
					1100:{
						items:4
					}
				}
			});

			$('.js-custom-next-v2').click(function(e) {
				e.preventDefault();
				owl4.trigger('next.owl.carousel');
			})
			$('.js-custom-prev-v2').click(function(e) {
				e.preventDefault();
				owl4.trigger('prev.owl.carousel');
			})
		}

		if ( $('.owl-single-text').length > 0 ) {
			var owlText = $('.owl-single-text').owlCarousel({
				loop: true,
				autoHeight: true,
				margin: 0,
				autoplay: true,
				smartSpeed: 1200,
				items: 1,
				nav: false,
				navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>']
			});
		}
		if ( $('.owl-single').length > 0 ) {
			var owl = $('.owl-single').owlCarousel({
				loop: true,
				autoHeight: true,
				margin: 0,
				autoplay: true,
				smartSpeed: 800,
				items: 1,
				nav: false,
				navText: ['<span class="icon-keyboard_backspace"></span>','<span class="icon-keyboard_backspace"></span>'],
				onInitialized: counter
			});

			function counter(event) {
				$('.owl-total').text(event.item.count);
			}
			
			$('.js-custom-owl-next').click(function(e) {
				e.preventDefault();
				owl.trigger('next.owl.carousel');
				owlText.trigger('next.owl.carousel');
			})
			$('.js-custom-owl-prev').click(function(e) {
				e.preventDefault();
				owl.trigger('prev.owl.carousel');
				owlText.trigger('prev.owl.carousel');
			})

			$('.owl-dots .owl-dot').each(function(i) {
				$(this).attr('data-index', i - 3);
			});

			owl.on('changed.owl.carousel', function(event) {
				var i = event.item.index;
				if ( i === 1 ) {
					i = event.item.count;
				} else {
					i = i - 1;
				}
				$('.owl-current').text(i);
				$('.owl-total').text(event.item.count);
			})
		}

	}
	owlPlugin();

	var counter = function() {
		
		$('.count-numbers').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ut-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.counter > span').each(function(){
					var $this = $(this),
					num = $this.data('number');
					$this.animateNumber(
					{
						number: num,
						numberStep: comma_separator_number_step
					}, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	jQuery(document).ready(function ($) {
		$("body").click(function (e) {

			const $i = $("<span />").text("♥ Ireland");
			const x = e.pageX,
				y = e.pageY;
			$i.css({
				"z-index": 9999999999999999999999999,
				"top": y - 20,
				"left": x,
				"position": "absolute",
				"font-weight": "bold",
				"color": "pink"
			});
			$("body").append($i);
			$i.animate({
					"top": y - 180,
					"opacity": 0
				},
				1500,
				function () {
					$i.remove();
				});
		});
	});

	$('.section1-counter').each(function(){
		const $this = $(this),
			num = $this.data('number');
		const comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
		$this.animateNumber(
			{
				number: num,
				numberStep: comma_separator_number_step
			}, 7000
		);
	});

	const countyList = [
		{
			county: "Carlow",
			town: "Carlow",
			area: 897,
			population: 61931,
			density: 63.4,
			vehicle: "CW"
		},
		{
			county: "Cavan",
			town: "Cavan",
			area: 1932,
			population: 81201,
			density: 39.3,
			vehicle: "CN"
		},
		{
			county: "Clare",
			town: "Ennis",
			area: 3450,
			population: 127419,
			density: 34.4,
			vehicle: "CE"
		},
		{
			county: "Cork",
			town: "Cork",
			area: 7500,
			population: 581231,
			density: 72.3,
			vehicle: "C"
		},
		{
			county: "Donegal",
			town: "Lifford",
			area: 4861,
			population: 166321,
			density: 32.6,
			vehicle: "DL"
		},
		{
			county: "Dublin",
			town: "Dublin",
			area: 922,
			population: 1450701,
			density: 1573.4,
			vehicle: "D"
		},
		{
			county: "Galway",
			town: "Galway",
			area: 6149,
			population: 276451,
			density: 42.0,
			vehicle: "G"
		},
		{
			county: "Kerry",
			town: "Tralee",
			area: 4807,
			population: 155258,
			density: 30.7,
			vehicle: "KY"
		},
		{
			county: "Kildare",
			town: "Naas",
			area: 1695,
			population: 246977,
			density: 131.0,
			vehicle: "KE"
		},
		{
			county: "Kilkenny",
			town: "Kilkenny",
			area: 2073,
			population: 103685,
			density: 47.8,
			vehicle: "KK"
		},
		{
			county: "Laois",
			town: "Portlaoise",
			area: 1720,
			population: 91657,
			density: 49.3,
			vehicle: "LS"
		},
		{
			county: "Leitrim",
			town: "Carrick-on-Shannon",
			area: 1590,
			population: 35087,
			density: 20.1,
			vehicle: "LM"
		},
		{
			county: "Limerick",
			town: "Limerick",
			area: 2756,
			population: 205444,
			density: 70.8,
			vehicle: "L"
		},
		{
			county: "Longford",
			town: "Longford",
			area: "1091",
			population: 46634,
			density: 37.4,
			vehicle: "LD"
		},
		{
			county: "Louth",
			town: "Dundalk",
			area: 826,
			population: 139100,
			density: 155.4,
			vehicle: "LH"
		},
		{
			county: "Mayo",
			town: "Castlebar",
			area: 5586,
			population: 137231,
			density: 23.3,
			vehicle: "MO"
		},
		{
			county: "Meath",
			town: "Navan",
			area: 2342,
			population: 220296,
			density: 83.2,
			vehicle: "MH"
		},
		{
			county: "Monaghan",
			town: "Monaghan",
			area: 1295,
			population: 64832,
			density: 47.3,
			vehicle: "MN"
		},
		{
			county: "Offaly",
			town: "Tullamore",
			area: 2001,
			population: 82668,
			density: 38.9,
			vehicle: "OY"
		},
		{
			county: "Roscommon",
			town: "Roscommon",
			area: 2548,
			population: 69995,
			density: 25.3,
			vehicle: "RN"
		},
		{
			county: "Sligo",
			town: "Sligo",
			area: 1838,
			population: 69819,
			density: 35.5,
			vehicle: "SO"
		},
		{
			county: "Tipperary",
			town: "Nenagh",
			area: 4305,
			population: 167661,
			density: 37.2,
			vehicle: "T"
		},
		{
			county: "Waterford",
			town: "Waterford",
			area: 1857,
			population: 127085,
			density: 62.7,
			vehicle: "W"
		},
		{
			county: "Westmeath",
			town: "Mullingar",
			area: 1840,
			population: 95840,
			density: 48.2,
			vehicle: "WH"
		},
		{
			county: "Wexford",
			town: "Wexford",
			area: 2367,
			population: 163527,
			density: 63.2,
			vehicle: "WX"
		},
		{
			county: "Wicklow",
			town: "Wicklow",
			area: 2027,
			population: 155485,
			density: 70.2,
			vehicle: "WW"
		}
	]

	function printTable(countyList) {
		$("#county_list_table_body").empty();
		$.each(countyList, function(index, item){
			const county = $("<td></td>").append(item.county);
			const town = $("<td></td>").append(item.town);
			const area = $("<td></td>").append(item.area.toLocaleString());
			const population = $("<td></td>").append(item.population.toLocaleString());
			const density = $("<td></td>").append(item.density.toLocaleString());
			const vehicle = $("<td></td>").append(item.vehicle);
			const mapBtn = $("<span></span>").css("cursor", "pointer").css("color", "#3366CC")
				.addClass("show-county-map").text("Show").attr("county-name", item.county);
			const btn = $("<td></td>").addClass("table-show-map-column").append(mapBtn);
			$("<tr></tr>").append(county).append(town).append(area)
				.append(population).append(density).append(vehicle).append(btn)
				.appendTo("#county_list_table_body");
		})
		if ($(window).width() < 992) {
			$(".table-show-map-column").addClass("visually-hidden");
		}
	}
	printTable(countyList);

	window.onload = function() {
		const winW = $(window).width();
		if (winW < 992) {
			$(".table-show-map-column").addClass("visually-hidden");
			$("#county-location-map-div").addClass("visually-hidden");
		}
	};

	$(document).on("click", ".show-county-map", function(){
		const county = $(this).attr("county-name");
		$("#county-location-map-div img").attr("src", "images/map/" + county + ".png");
	});

	let sortUp = true;
	$(document).on("click", ".sortable", function(){
		const column = $(this).attr("sort-by");
		let sorted_countyList;
		if(sortUp) {
			sorted_countyList = _.orderBy(countyList, [column], ['asc']);
		} else {
			sorted_countyList = _.orderBy(countyList, [column], ['desc']);
		}
		sortUp = !sortUp;
		printTable(sorted_countyList);
	});

	let myChart;

	function generateAreaPieChart() {
		let pie_data = [];
		countyList.forEach(ele => {
			let obj = {};
			obj.name = ele.county;
			obj.value = ele.area;
			pie_data.push(obj);
		});

		const chartDom = document.getElementById('area-pie-chart');
		myChart = echarts.init(chartDom);
		let option;
		option = {
			title: {
				text: 'County Area of Ireland',
				left: 'left'
			},
			tooltip: {
				trigger: 'item'
			},
			series: [
				{
					name: 'Access From',
					type: 'pie',
					radius: '70%',
					data: pie_data,
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		};
		option && myChart.setOption(option);
	}

	function generatePopulationBarChart() {
		let x_data = [];
		let y_data = [];
		const sorted_population = _.orderBy(countyList, ['population'], ['desc']).slice(0,10).reverse();
		sorted_population.forEach(ele => {
			x_data.push(ele.county);
			y_data.push(ele.population);
		});

		const chartDom = document.getElementById('population-bar-chart');
		myChart = echarts.init(chartDom);
		let option;
		option = {
			title: {
				text: 'Most 10 Population Counties of Ireland',
				left: 'left'
			},
			xAxis: {
				type: 'category',
				data: x_data
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					data: y_data,
					type: 'bar'
				}
			]
		};
		option && myChart.setOption(option);
	}

	const historicalPopulationData = [
		{
			year: 2023,
			population: 5056935
		},
		{
			year: 2022,
			population: 5023109
		},
		{
			year: 2021,
			population: 4986526
		},
		{
			year: 2020,
			population: 4946119
		},
		{
			year: 2019,
			population: 4896019
		},
		{
			year: 2018,
			population: 4834507
		},
		{
			year: 2017,
			population: 4771854
		},
		{
			year: 2016,
			population: 4715788
		},
		{
			year: 2015,
			population: 4665760
		},
		{
			year: 2014,
			population: 4622167
		},
		{
			year: 2013,
			population: 4588832
		},
		{
			year: 2012,
			population: 4564550
		},
		{
			year: 2011,
			population: 4544501
		},
		{
			year: 2010,
			population: 4524585
		},
		{
			year: 2009,
			population: 4499792
		},
		{
			year: 2008,
			population: 4452392
		},
		{
			year: 2007,
			population: 4359834
		},
		{
			year: 2006,
			population: 4234806
		},
		{
			year: 2005,
			population: 4121216
		},
		{
			year: 2004,
			population: 4031954
		},
		{
			year: 2003,
			population: 3958705
		},
		{
			year: 2002,
			population: 3894258
		},
		{
			year: 2001,
			population: 3829018
		},
		{
			year: 2000,
			population: 3768950
		}
	];

	function generateNationalPopulationLineChart() {
		let x_data = [];
		let y_data = [];
		const sorted_historicalPopulation = _.orderBy(historicalPopulationData, ['year'], ['asc']);
		sorted_historicalPopulation.forEach(ele => {
			x_data.push(ele.year);
			y_data.push(ele.population);
		});

		const chartDom = document.getElementById('population-line-chart');
		myChart = echarts.init(chartDom);
		let option;
		option = {
			title: {
				text: 'Population of Ireland since 2000',
				left: 'left'
			},
			xAxis: {
				type: 'category',
				data: x_data
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					data: y_data,
					type: 'line',
					smooth: true
				}
			]
		};
		option && myChart.setOption(option);
	}

	generateAreaPieChart();
	$(document).on("click", "#headingOne", function(){
		myChart = null;
		generateAreaPieChart();
	});
	$(document).on("click", "#headingTwo", function(){
		myChart = null;
		generatePopulationBarChart();
	});
	$(document).on("click", "#headingThree", function(){
		myChart = null;
		generateNationalPopulationLineChart();
	});

	window.onresize = function() {
		const winW = $(window).width();
		if (winW < 992) {
			$(".table-show-map-column").addClass("visually-hidden");
			$("#county-location-map-div").addClass("visually-hidden");
		} else {
			$(".table-show-map-column").removeClass("visually-hidden");
			$("#county-location-map-div").removeClass("visually-hidden");
		}
		myChart.resize();
	}

	const largest_cities = ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Athlone",
							"Balbriggan", "Carlow", "Bray", "Celbridge", "Dundalk", "Ennis", "Kilkenny",
							"Killarney", "Letterkenny", "Mullingar", "Naas", "Navan", "Newbridge",
							"Portlaoise", "Sligo", "Swords", "Tralee", "Tullamore", "Wexford"];
	let l_c_index = 0;
	const carousel_nums = Math.ceil(largest_cities.length / 3);
	$(".carousel-inner").empty();
	for(let i = 0; i < carousel_nums; i++) {
		const carousel_item = $("<div></div>").addClass("carousel-item");
		if(i === 0) {
			carousel_item.addClass("active");
		}
		const carousel_item_inside = $("<div></div>").addClass("carousel-item-inside");
		const row = $("<div></div>").addClass("row");
		for(let j = 0; j < 3; j++) {
			if(l_c_index < largest_cities.length) {
				const col = $("<div></div>").addClass("col-4 col-inner-center");
				const card = $("<div></div>").addClass("card text-center").css("width", "18rem");
				const img = $("<img>").attr("src", "images/card/" + largest_cities[l_c_index] + ".jpg")
					.addClass("card-img-top").attr("alt", largest_cities[l_c_index] + " Image");
				const card_body = $("<div></div>").addClass("card-body");
				const link = $("<a></a>").attr("href", "#section5").addClass("card-link")
					.attr("city", l_c_index).html(largest_cities[l_c_index]);
				card_body.append(link);
				card.append(img).append(card_body);
				col.append(card);
				row.append(col);
				l_c_index++;
			}
		}
		carousel_item_inside.append(row);
		carousel_item.append(carousel_item_inside);
		$(".carousel-inner").append(carousel_item);
	}

	const cityInfo = [
		{
			city: "Dublin",
			video: "https://www.youtube.com/watch?v=LcKnx7I97yk",
			wikipedia: "https://en.wikipedia.org/wiki/Dublin",
			paragraph: [
				"Dublin (Irish: Baile Átha Cliath) is the capital and largest city of Ireland. On a bay at the mouth of the River Liffey, it is in the province of Leinster, bordered on the south by the Dublin Mountains, a part of the Wicklow Mountains range. At the 2016 census it had a population of 1,173,179, while the preliminary results of the 2022 census recorded that County Dublin as a whole had a population of 1,450,701, and that the population of the Greater Dublin Area was over 2 million, or roughly 40% of the Republic of Ireland's total population.",
				"A settlement was established in the area by the Gaels during or before the 7th century, followed by the Vikings. As the Kingdom of Dublin grew, it became Ireland's principal settlement by the 12th century Anglo-Norman invasion of Ireland. The city expanded rapidly from the 17th century and was briefly the second largest in the British Empire and sixth largest in Western Europe after the Acts of Union in 1800. Following independence in 1922, Dublin became the capital of the Irish Free State, renamed Ireland in 1937.",
				"Dublin is a centre for education, arts and culture, administration and industry. As of 2018, the city was listed by the Globalization and World Cities Research Network (GaWC) as a global city, with a ranking of \"Alpha minus\", which places it as one of the top thirty cities in the world."
			]
		},
		{
			city: "Cork",
			video: "https://www.youtube.com/watch?v=m-rfRS_0A_M",
			wikipedia: "https://en.wikipedia.org/wiki/Cork_(city)",
			paragraph: [
				"Cork (Irish: Corcaigh, from corcach, meaning 'marsh') is the second largest city in Ireland and third largest city by population on the island of Ireland. It is located in the south-west of Ireland, in the province of Munster. Following an extension to the city's boundary in 2019, its population is over 222,000.",
				"The city centre is an island positioned between two channels of the River Lee which meet downstream at the eastern end of the city centre, where the quays and docks along the river lead outwards towards Lough Mahon and Cork Harbour, one of the largest natural harbours in the world.",
				"Originally a monastic settlement, Cork was expanded by Viking invaders around 915. Its charter was granted by Prince John in 1185. Cork city was once fully walled, and the remnants of the old medieval town centre can be found around South and North Main streets. The city's cognomen of \"the rebel city\" originates in its support for the Yorkist cause in the Wars of the Roses. Corkonians sometimes refer to the city as \"the real capital\", a reference to its opposition to the Anglo-Irish Treaty in the Irish Civil War."
			]
		},
		{
			city: "Limerick",
			video: "https://www.youtube.com/watch?v=8oLnRjvBs08",
			wikipedia: "https://en.wikipedia.org/wiki/Limerick",
			paragraph: [
				"Limerick (Irish: Luimneach) is a western city in Ireland situated within County Limerick. It is in the province of Munster and is located in the Mid-West which comprises part of the Southern Region. With a population of 94,192 at the 2016 census, Limerick is the third-most populous urban area in the state, and the fourth-most populous city on the island of Ireland at the 2011 census. The city lies on the River Shannon, with the historic core of the city located on King's Island, which is bounded by the Shannon and Abbey Rivers. Limerick is also located at the head of the Shannon Estuary, where the river widens before it flows into the Atlantic Ocean. Limerick City and County Council is the local authority for the city."
			]
		},
		{
			city: "Galway",
			video: "https://www.youtube.com/watch?v=pFNGWfshvgA",
			wikipedia: "https://en.wikipedia.org/wiki/Galway",
			paragraph: [
				"Galway (Irish: Gaillimh) is a city in the West of Ireland, in the province of Connacht, which is the county town of County Galway. It lies on the River Corrib between Lough Corrib and Galway Bay. It is the most populous settlement in the province of Connacht, the sixth most populous city on the island of Ireland and the fourth most populous in the Republic of Ireland, with a population at the 2022 census of 83,456.",
				"Located near an earlier settlement, Galway grew around a fortification built by the King of Connacht in 1124. A municipal charter in 1484 allowed citizens of the by then walled city to form a council and mayoralty. Controlled largely by a group of merchant families, the Tribes of Galway, the city grew into a trading port. Following a period of decline, as of the 21st century, Galway is a tourist destination known for festivals and events including the Galway Arts Festival.",
				"In 2018, Galway was named the European Region of Gastronomy. The city was the European Capital of Culture for 2020, alongside Rijeka, Croatia."
			]
		},
		{
			city: "Waterford",
			video: "https://www.youtube.com/watch?v=YaeUCHw_kNE",
			wikipedia: "https://en.wikipedia.org/wiki/Waterford",
			paragraph: [
				"Waterford (Irish: Port Láirge; from Old Norse Veðrafjǫrðr], meaning \"ram (wether) fjord\") is a city in County Waterford in the south-east of Ireland. It is located within the province of Munster. The city is situated at the head of Waterford Harbour. It is the oldest and the fifth most populous city in Ireland. It is the ninth most populous settlement on the island of Ireland. Waterford City and County Council is the local government authority for the city. According to the 2016 Census, 53,504 people live in the city, with a wider metropolitan population of 82,963.",
				"Today, Waterford is known for Waterford Crystal, a legacy of the city's former glassmaking industry. Glass, or crystal, was manufactured in the city from 1783 until early 2009 when the factory there was shut down after the receivership of Waterford Wedgwood plc. The Waterford Crystal visitor centre in the Viking Quarter, under new owners, opened in June 2010, after the intervention of Waterford City Council and Waterford Chamber of Commerce, and resumed production. Waterford is also known for being the starting point of Ryanair's first flight, a 14-seat Embraer Bandeirante turboprop aircraft flying between Waterford and London Gatwick Airport."
			]
		},
		{
			city: "Drogheda",
			video: "https://www.youtube.com/watch?v=UDIAKA4mvf8",
			wikipedia: "https://en.wikipedia.org/wiki/Drogheda",
			paragraph: [
				"Drogheda (Irish: Droichead Átha, meaning \"bridge at the ford\") is an industrial and port town in County Louth on the east coast of Ireland, 56 km (35 mi) north of Dublin. It is located on the Dublin–Belfast corridor on the east coast of Ireland, mostly in County Louth but with the south fringes of the town in County Meath, 49 km (30 mi) north of Dublin. Drogheda has a population of approximately 41,000 inhabitants (2016), making it the eleventh largest settlement by population in all of Ireland, and the largest town in the Republic of Ireland by both population and area. It is the last bridging point on the River Boyne before it enters the Irish Sea. The UNESCO World Heritage Site of Newgrange is located 8 km (5.0 mi) west of the town.",
				"Drogheda was founded as two separately administered towns in two different territories: Drogheda-in-Meath (i.e. the Lordship and Liberty of Meath, from which a charter was granted in 1194) and Drogheda-in-Oriel (or 'Uriel', as County Louth was then known). The division came from the twelfth-century boundary between two Irish kingdoms, colonised by different Norman interests, just as the River Boyne continues to divide the town between the dioceses of Armagh and Meath. In 1412 these two towns were united, and Drogheda became a county corporate, styled as \"the County of the Town of Drogheda\". Drogheda continued as a county borough until the establishment of county councils under the Local Government (Ireland) Act 1898, which saw all of Drogheda, including a large area south of the Boyne, become part of an extended County Louth. With the passing of the County of Louth and Borough of Drogheda (Boundaries) Provisional Order 1976, County Louth again grew larger at the expense of County Meath. The boundary was further altered in 1994 by the Local Government (Boundaries) (Town Elections) Regulations 1994. The 2007–2013 Meath County Development Plan recognises the Meath environs of Drogheda as a primary growth centre on a par with Navan.",
				"The town was selected to host Fleadh Cheoil na hÉireann for two years in 2018."
			]
		}
	]

	function generateCityInfo(city) {
		const info = _.find(cityInfo, function(obj) {
			if(obj.city === city) {
				return true;
			}
		})
		$("#city-name").text(info.city);
		$("#play-video").css("display", "block");
		$("#play-video").attr("href", info.video);
		$("#video-cover-img").attr("src", "images/card/" + info.city + ".jpg");
		$("#wikipedia-url").removeClass("placeholder");
		$("#wikipedia-url").attr("href", info.wikipedia);
		$("#city-info-paragraph").empty();
		let paragraph = $("<div></div>");
		for(const p of info.paragraph) {
			const newP = $("<p></p>").append(p);
			paragraph.append(newP);
		}
		$("#city-info-paragraph").append(paragraph);
	}

	generateCityInfo(largest_cities[0]);

	function generateCItyInfoPlaceholder(city) {
		$("#city-name").text(city);
		$("#play-video").removeAttr("href");
		$("#play-video").css("display", "none");
		$("#video-cover-img").attr("src", "images/card/" + city + ".jpg");
		$("#wikipedia-url").addClass("placeholder");
		$("#wikipedia-url").removeAttr("href");
		$("#city-info-paragraph").empty();
		let paragraph = $("<div></div>");
		for(let i = 0; i < 10; i ++) {
			const max = 12;
			const min = 5;
			const random = Math.floor(Math.random() * (max - min + 1)) + min;
			const paragraphPlaceholder = $("<p></p>").addClass("placeholder col-" + random);
			paragraph.append(paragraphPlaceholder);
		}
		$("#city-info-paragraph").append(paragraph);
	}

	$(document).on("click", ".card-link", function(){
		const cityId = $(this).attr("city");
		if(cityId < 6) {
			$("#info-not-exist").css("display", "none");
			generateCityInfo(largest_cities[cityId])
		} else {
			$("#info-not-exist").css("display", "block");
			generateCItyInfoPlaceholder(largest_cities[cityId]);
		}
	});

	$(document).on("click", "#close-info-alert", function(){
		$("#info-not-exist").css("display", "none");
	});

	$(document).on("click", "#open-comments-modal", function(){
		reset_form("#comments-modal form");
		$("#comments-modal").css("display", "block");
	});

	$(document).on("click", ".close-comments-modal", function(){
		$("#comments-modal").css("display", "none");
	});

	function show_validate_msg(element, status, msg) { // show validate msg in modal
		$(element).removeClass("is-valid is-invalid"); // remove validate status from the previous try
		$(element).next("div").removeClass("invalid-feedback").text(""); // remove validate msg from the previous try
		if("success" === status){
			$(element).addClass("is-valid");
			$(element).next("div").text("");
		} else if("error" === status){
			$(element).addClass("is-invalid");
			$(element).next("div").addClass("invalid-feedback").text(msg);
		}
	}

	function validateInput(email, comments) {
		const regEmail = /^([a-z0-9_-]+)+@([\da-z-]+)+\.([a-z]+)$/;
		if (email === "" || email === null) {
			show_validate_msg("#modal-email", "error", "Please input your email");
			return false;
		} else if (!regEmail.test(email)) {
			show_validate_msg("#modal-email", "error", "Invalid email address");
			return false;
		} else {
			show_validate_msg("#modal-email", "success", "");
		}
		if(comments === "" || comments === null) {
			show_validate_msg("#modal-comments", "error", "Please leave your message");
			return false;
		} else {
			show_validate_msg("#modal-comments", "success", "");
		}
		return true;
	}

	function sendComments() {
		const email = $("#modal-email").val().trim();
		const comments = $("#modal-comments").val().trim();
		if(validateInput(email, comments)) {
			$("#comments-modal").css("display", "none");
			const toastExample = $("#sendNotificationToast");
			const toast = new bootstrap.Toast(toastExample);
			toast.show()
		}
	}

	function reset_form(element) {
		$(element)[0].reset(); // remove all input
		$(element).find(".form-control").attr("value", ""); // remove all value
		$(element).find(".form-control").removeClass("is-valid is-invalid"); // remove validate status
		$(element).find(".modal-feedback").text(""); // remove validate msg
	}

	$(document).on("click", "#send-comments", function() {
		sendComments();
	});

})