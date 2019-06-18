<?php
/**
Template Name: shkafy_otzyvy_2
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
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
            
          
           get_template_part( 'template-custom/test1' );  

            
            

			/* Start the Loop */
			while ( have_posts() ) :
				the_post();

				get_template_part( 'template-parts/content/content', 'page2' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) {
					comments_template();
				}

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</section><!-- #primary -->
</div><!-- #page -->
<?php

get_template_part( 'template-custom/header' ); 
get_template_part( 'template-custom/top-menu' ); 


get_template_part( 'template-custom/shkafy_otzyvy_2/es1_otzivy_bg' ); 
get_template_part( 'template-custom/shkafy_otzyvy_2/d_otziv_form' ); 

get_template_part( 'template-custom/main/es12_bg15' ); 
get_template_part( 'template-custom/main/es13_bg_16' ); 
get_template_part( 'template-custom/main/giving17' ); 
get_template_part( 'template-custom/main/b_windownow_bg14' ); 
get_template_part( 'template-custom/main/es16_bg20' ); 
get_template_part( 'template-custom/main/es17_bg21' ); 
get_template_part( 'template-custom/main/es18_bg22' ); 


get_template_part( 'template-custom/footer-main' ); 


get_footer();
