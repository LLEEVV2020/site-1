<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */

get_header();
?>
<div style="display: none;" id="content" class="site-content">
	<section id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		if ( have_posts() ) {

			// Load posts loop.
			while ( have_posts() ) {
				the_post();
				get_template_part( 'template-parts/content/content' );
			}

			// Previous/next page navigation.
			twentynineteen_the_posts_navigation();

		} else {

			// If no content, include the "No posts found" template.
			get_template_part( 'template-parts/content/content', 'none' );

		}
		?>

		</main><!-- .site-main -->
	</section><!-- .content-area -->

</div><!-- #page -->

<?php

get_template_part( 'template-custom/header' ); 
get_template_part( 'template-custom/top-menu' ); 


get_template_part( 'template-custom/main/es1' ); 
get_template_part( 'template-custom/main/es2' ); 
get_template_part( 'template-custom/main/b-vid-remonta3' ); 
get_template_part( 'template-custom/main/b-sms_bg4' ); 
get_template_part( 'template-custom/main/es7_5' ); 
get_template_part( 'template-custom/main/b-sms_bg6' ); 
get_template_part( 'template-custom/main/waiting_reality7' );
get_template_part( 'template-custom/main/b-free_bg8' ); 
get_template_part( 'template-custom/main/b-kosmet-remont9' ); 
get_template_part( 'template-custom/main/quick-calculation10' ); 
get_template_part( 'template-custom/main/b-raschet11' ); 
get_template_part( 'template-custom/main/b-raschet12' );
get_template_part( 'template-custom/main/es3_13' ); 
get_template_part( 'template-custom/main/b_windownow_bg14' ); 
get_template_part( 'template-custom/main/es12_bg15' ); 
get_template_part( 'template-custom/main/es13_bg_16' ); 
get_template_part( 'template-custom/main/giving17' ); 
get_template_part( 'template-custom/main/reviews18' ); 
get_template_part( 'template-custom/main/map19' ); 
get_template_part( 'template-custom/main/es16_bg20' ); 
get_template_part( 'template-custom/main/es17_bg21' ); 
get_template_part( 'template-custom/main/es18_bg22' ); 


get_template_part( 'template-custom/footer-main' ); 



get_footer();
