fx_version 'cerulean'
game 'gta5'
lua54 'yes'
use_experimental_fxv2_oal 'yes'

ui_page 'web/build/index.html'
ui_page 'http://localhost:3000/' --for dev

shared_scripts {
    '@ox_lib/init.lua',
    'cfg.lua',
    'shared.lua',
}

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server.lua',
    'modules/**/server.lua',
}

client_scripts {
    'client.lua',
    'modules/**/client.lua',
}

files {
    'locales/*.json',
    'build/**',
}

escrow_ignore {
    'cfg.lua',
    'shared.lua',
}
