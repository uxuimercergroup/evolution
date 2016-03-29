module.exports = {

  // String replace assets url in page templates with absolute path
  page_templates: {
    files: [{
      expand: true,
      cwd: 'dist/page-templates',
      src: ['**/*.html'],
      dest: 'dist/page-templates'
    }],
    options: {
      replacements: [
        {
          pattern: /..\/assets/ig,
          replacement: 'https://evolution.mercer.com/assets'
        }
      ]
    }
  },

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
          replacement: '<%= package.version %>'
        },
        {
          pattern: /{{ evo_meta_author }}/g,
          replacement: '<%= package.author %>'
        },
        {
          pattern: /{{ evo_meta_date }}/g,
          replacement: '<%= package.date %>'
        },
        {
          pattern: /{{ evo_meta_url }}/g,
          replacement: '<%= package.homepage %>'
        },
        {
          pattern: /{{ meta_project }}/g,
          replacement: '<%= package.project.name %>'
        },
        {
          pattern: /{{ meta_version }}/g,
          replacement: '<%= package.project.version %>'
        },
        {
          pattern: /{{ meta_author }}/g,
          replacement: '<%= package.project.author %>'
        },
        {
          pattern: /{{ meta_date }}/g,
          replacement: '<%= package.project.date %>'
        },
        {
          pattern: /{{ meta_url }}/g,
          replacement: '<%= package.project.homepage %>'
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