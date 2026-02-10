<?php
function my_ts_theme_enqueue_assets() {
    // ビルド時に生成された依存関係ファイルを読み込む
    $asset_file_path = get_template_directory() . '/build/index.asset.php';
    
    if ( ! file_exists( $asset_file_path ) ) {
        return;
    }

    $asset_file = include( $asset_file_path );

    // JSの読み込み
    wp_enqueue_script(
        'my-react-app',
        get_template_directory_uri() . '/build/index.js',
        $asset_file['dependencies'],
        $asset_file['version'],
        true
    );

    // CSSの読み込み
    wp_enqueue_style(
        'my-react-style',
        get_template_directory_uri() . '/build/index.css',
        [],
        $asset_file['version']
    );
}
add_action('wp_enqueue_scripts', 'my_ts_theme_enqueue_assets');