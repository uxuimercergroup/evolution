module.exports = {

  // String replace version numbers in files (CSS, JS)
  meta: {
    files: [{
      expand: true,
      cwd: 'dist/',
      src: ['**/*.css', '**/*.js'],
      dest: 'dist/'
    }],
    options: {
      replacements: [
        {
          pattern: /{{ evo_meta_version }}/g,
          replacement: '<%= package.evolution.version %>'
        },
        {
          pattern: /{{ evo_meta_author }}/g,
          replacement: '<%= package.evolution.author %>'
        },
        {
          pattern: /{{ evo_meta_date }}/g,
          replacement: '<%= package.evolution.date %>'
        },
        {
          pattern: /{{ evo_meta_url }}/g,
          replacement: '<%= package.evolution.url %>'
        },
        {
          pattern: /{{ meta_project }}/g,
          replacement: '<%= package.project %>'
        },
        {
          pattern: /{{ meta_version }}/g,
          replacement: '<%= package.version %>'
        },
        {
          pattern: /{{ meta_author }}/g,
          replacement: '<%= package.author %>'
        },
        {
          pattern: /{{ meta_date }}/g,
          replacement: '<%= package.date %>'
        },
        {
          pattern: /{{ meta_url }}/g,
          replacement: '<%= package.url %>'
        },
        {
          pattern: /{{ conversational_form_meta_name }}/g,
          replacement: '<%= package.organisms.conversational_form.name %>'
        },
        {
          pattern: /{{ conversational_form_meta_version }}/g,
          replacement: '<%= package.organisms.conversational_form.version %>'
        },
        {
          pattern: /{{ conversational_form_meta_date }}/g,
          replacement: '<%= package.organisms.conversational_form.date %>'
        },
        {
          pattern: /{{ fat_footer_meta_name }}/g,
          replacement: '<%= package.organisms.fat_footer.name %>'
        },
        {
          pattern: /{{ fat_footer_meta_version }}/g,
          replacement: '<%= package.organisms.fat_footer.version %>'
        },
        {
          pattern: /{{ fat_footer_meta_date }}/g,
          replacement: '<%= package.organisms.fat_footer.date %>'
        },
        {
          pattern: /{{ item_selection_panel_meta_name }}/g,
          replacement: '<%= package.organisms.item_selection_panel.name %>'
        },
        {
          pattern: /{{ item_selection_panel_meta_version }}/g,
          replacement: '<%= package.organisms.item_selection_panel.version %>'
        },
        {
          pattern: /{{ item_selection_panel_meta_date }}/g,
          replacement: '<%= package.organisms.item_selection_panel.date %>'
        },
        {
          pattern: /{{ pricing_table_meta_name }}/g,
          replacement: '<%= package.organisms.pricing_table.name %>'
        },
        {
          pattern: /{{ pricing_table_meta_version }}/g,
          replacement: '<%= package.organisms.pricing_table.version %>'
        },
        {
          pattern: /{{ pricing_table_meta_date }}/g,
          replacement: '<%= package.organisms.pricing_table.date %>'
        },
        {
          pattern: /{{ showcase_panel_meta_name }}/g,
          replacement: '<%= package.organisms.showcase_panel.name %>'
        },
        {
          pattern: /{{ showcase_panel_meta_version }}/g,
          replacement: '<%= package.organisms.showcase_panel.version %>'
        },
        {
          pattern: /{{ showcase_panel_meta_date }}/g,
          replacement: '<%= package.organisms.showcase_panel.date %>'
        },
        {
          pattern: /{{ social_media_badges_meta_name }}/g,
          replacement: '<%= package.organisms.social_media_badges.name %>'
        },
        {
          pattern: /{{ social_media_badges_meta_version }}/g,
          replacement: '<%= package.organisms.social_media_badges.version %>'
        },
        {
          pattern: /{{ social_media_badges_meta_date }}/g,
          replacement: '<%= package.organisms.social_media_badges.date %>'
        },
        {
          pattern: /{{ stepper_meta_name }}/g,
          replacement: '<%= package.organisms.stepper.name %>'
        },
        {
          pattern: /{{ stepper_meta_version }}/g,
          replacement: '<%= package.organisms.stepper.version %>'
        },
        {
          pattern: /{{ stepper_meta_date }}/g,
          replacement: '<%= package.organisms.stepper.date %>'
        },
        {
          pattern: /{{ thin_footer_meta_name }}/g,
          replacement: '<%= package.organisms.thin_footer.name %>'
        },
        {
          pattern: /{{ thin_footer_meta_version }}/g,
          replacement: '<%= package.organisms.thin_footer.version %>'
        },
        {
          pattern: /{{ thin_footer_meta_date }}/g,
          replacement: '<%= package.organisms.thin_footer.date %>'
        }
      ]
    }
  }

};